import { existsSync, writeFileSync } from "node:fs"
import { spawn } from "node:child_process"

const [url = "http://127.0.0.1:4173/", output = "page.png", widthArg = "390", heightArg = "844"] = process.argv.slice(2)
const width = Number(widthArg)
const height = Number(heightArg)
const chromePath = process.env.CHROME_PATH || [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
].find(existsSync)

if (!chromePath) throw new Error("Chrome was not found. Set CHROME_PATH and try again.")

const port = 9333 + Math.floor(Math.random() * 400)
const chrome = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${process.env.TEMP || "/tmp"}/portfolio-capture-${Date.now()}`,
    "about:blank",
], { stdio: "ignore" })

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

const getTarget = async () => {
    for (let attempt = 0; attempt < 40; attempt += 1) {
        try {
            const targets = await fetch(`http://127.0.0.1:${port}/json`).then((response) => response.json())
            const target = targets.find((item) => item.type === "page")
            if (target) return target
        } catch {
            // Chrome may need a few hundred milliseconds to expose the endpoint.
        }
        await delay(150)
    }
    throw new Error("Chrome DevTools endpoint did not become available.")
}

try {
    const target = await getTarget()
    const socket = new WebSocket(target.webSocketDebuggerUrl)
    await new Promise((resolve, reject) => {
        socket.addEventListener("open", resolve, { once: true })
        socket.addEventListener("error", reject, { once: true })
    })

    let sequence = 0
    const pending = new Map()
    socket.addEventListener("message", (event) => {
        const message = JSON.parse(event.data)
        if (!message.id || !pending.has(message.id)) return
        const { resolve, reject } = pending.get(message.id)
        pending.delete(message.id)
        if (message.error) reject(new Error(message.error.message))
        else resolve(message.result)
    })

    const send = (method, params = {}) => new Promise((resolve, reject) => {
        const id = ++sequence
        pending.set(id, { resolve, reject })
        socket.send(JSON.stringify({ id, method, params }))
    })

    await send("Page.enable")
    await send("Runtime.enable")
    await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: true })
    await send("Page.navigate", { url })
    await delay(1500)

    const audit = await send("Runtime.evaluate", {
        returnByValue: true,
        expression: `(() => ({
            innerWidth: window.innerWidth,
            scrollWidth: document.documentElement.scrollWidth,
            title: document.title,
            accessibility: {
                imagesWithoutAlt: [...document.images].filter((image) => !image.hasAttribute('alt')).length,
                emptyLinks: [...document.querySelectorAll('a')].filter((link) => !link.textContent.trim() && !link.getAttribute('aria-label')).length,
                emptyButtons: [...document.querySelectorAll('button')].filter((button) => !button.textContent.trim() && !button.getAttribute('aria-label')).length,
                unlabeledFields: [...document.querySelectorAll('input:not([type="hidden"]), select, textarea')]
                    .filter((field) => !field.closest('label') && !field.getAttribute('aria-label') && !field.getAttribute('aria-labelledby')).length,
                duplicateIds: [...document.querySelectorAll('[id]')]
                    .map((element) => element.id)
                    .filter((id, index, ids) => ids.indexOf(id) !== index),
            },
            overflowing: [...document.querySelectorAll('body *')]
                .filter((element) => !element.closest('.primary-nav'))
                .map((element) => ({ element, rect: element.getBoundingClientRect() }))
                .filter(({ rect }) => rect.left < -1 || rect.right > window.innerWidth + 1)
                .slice(0, 12)
                .map(({ element, rect }) => ({
                    tag: element.tagName.toLowerCase(),
                    className: String(element.className || '').slice(0, 100),
                    left: Math.round(rect.left),
                    right: Math.round(rect.right),
                    width: Math.round(rect.width)
                }))
        }))()`,
    })
    const screenshot = await send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false })
    writeFileSync(output, Buffer.from(screenshot.data, "base64"))
    console.log(JSON.stringify(audit.result.value, null, 2))
    socket.close()
} finally {
    chrome.kill()
}
