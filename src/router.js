import { createRouter, createWebHistory } from "vue-router"
import HomeView from "./views/HomeView.vue"
import WorkView from "./views/WorkView.vue"
import ProjectView from "./views/ProjectView.vue"
import { projects } from "./data/portfolio.js"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "Jehosua A. Joya, MCS, MBA, B.Eng. | Cloud, Software & Automation Engineer",
            description: "Cloud, software, and automation engineer with 5+ years of experience building APIs, cloud-native platforms, CI/CD systems, and reliable business automations.",
        },
    },
    {
        path: "/projects",
        name: "projects",
        component: WorkView,
        meta: {
            title: "Selected Engineering Work | Jehosua A. Joya, MCS, MBA, B.Eng.",
            description: "Explore cloud, software, automation, and applied machine learning work by Jehosua A. Joya, MCS, MBA, B.Eng.",
        },
    },
    {
        path: "/projects/:slug",
        name: "project",
        component: ProjectView,
        props: true,
        beforeEnter: (to) => projects.some((project) => project.slug === to.params.slug) || { name: "projects" },
    },
    { path: "/:pathMatch(.*)*", redirect: { name: "home" } },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        if (to.hash) return { el: to.hash, top: 88, behavior: "smooth" }
        return { top: 0 }
    },
})

const defaultDescription = routes[0].meta.description

router.afterEach((to) => {
    const project = to.name === "project"
        ? projects.find((item) => item.slug === to.params.slug)
        : null
    const title = project
        ? `${project.name} | Jehosua A. Joya, MCS, MBA, B.Eng.`
        : to.meta.title
    const description = project?.summary || to.meta.description || defaultDescription

    const canonicalPath = to.path === "/" ? "/" : `${to.path.replace(/\/$/, "")}/`
    const canonicalUrl = `https://jehosua97.github.io${canonicalPath}`

    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute("content", description)
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title)
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description)
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description)
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl)
})

export default router
