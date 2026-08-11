import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(scriptDirectory, "..")
const outputDirectory = join(projectRoot, "dist")
const shell = readFileSync(join(outputDirectory, "index.html"), "utf8")

const pages = [
    {
        path: "projects",
        title: "Selected Engineering Work | Jehosua A. Joya, MCS, MBA, B.Eng.",
        description: "Explore cloud, software, automation, and applied machine learning work by Jehosua A. Joya, MCS, MBA, B.Eng.",
    },
    {
        path: "projects/sustainable-telecom-churn",
        title: "Sustainable Telecom Churn & E-Waste ML | Jehosua A. Joya, MCS, MBA, B.Eng.",
        description: "An end-to-end machine learning workflow connecting telecom churn prediction with a wider sustainability and e-waste analysis.",
    },
    {
        path: "projects/business-ai-automation-hub",
        title: "Business AI Automation Hub | Jehosua A. Joya, MCS, MBA, B.Eng.",
        description: "A security-conscious automation monorepo with typed services, n8n workflows, data contracts, structured logging, and human approval gates.",
    },
    {
        path: "projects/hybrid-cloud-monitoring-platform",
        title: "Hybrid Cloud Monitoring & Automation Platform | Jehosua A. Joya, MCS, MBA, B.Eng.",
        description: "A hybrid cloud monitoring and automation platform combining Infrastructure as Code, Python automation, alerting, and visualization dashboards.",
    },
]

const escapeAttribute = (value) => value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")

const renderPage = ({ path, title, description }) => {
    const url = `https://jehosua97.github.io/${path}/`
    return shell
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${escapeAttribute(description)}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(" \/>)/, `$1${escapeAttribute(title)}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(" \/>)/, `$1${escapeAttribute(description)}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(" \/>)/, `$1${url}$2`)
        .replace(/(<meta name="twitter:title" content=")[^"]*(" \/>)/, `$1${escapeAttribute(title)}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(" \/>)/, `$1${escapeAttribute(description)}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*(" \/>)/, `$1${url}$2`)
}

for (const page of pages) {
    const pageDirectory = join(outputDirectory, page.path)
    mkdirSync(pageDirectory, { recursive: true })
    writeFileSync(join(pageDirectory, "index.html"), renderPage(page))
}

writeFileSync(join(outputDirectory, "404.html"), shell)

console.log(`Generated ${pages.length} route entry files and a 404 fallback.`)
