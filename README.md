# Jehosua A. Joya, MCS, MBA, B.Eng. — Engineering Portfolio

Professional portfolio for **Jehosua A. Joya, MCS, MBA, B.Eng.**, a Cloud, Software & Automation Engineer based in Brampton, Ontario, Canada.

The site is designed for two audiences:

- Engineering recruiters and employers evaluating cloud, platform, software, DevOps, and automation experience.
- Businesses looking for process automation, API integration, cloud delivery, monitoring, or responsible AI-ready workflow design.

## What is included

- Executive, responsive homepage with professional portrait and verified career metrics.
- Separate projects index and three project case-study routes.
- Real notebook artifacts from the public churn-analysis repository.
- Real workflow names and architectural boundaries from the automation repository.
- Services, delivery process, professional experience, education, credentials, toolkit, about, and contact sections.
- Public telephone, email, LinkedIn, GitHub, résumé download, and availability for freelance, consulting, and full-time opportunities.
- Individual public Credly links for both Google Cloud Skill Badges.
- Contact validation, explicit consent, a honeypot, service-endpoint support, and an honest email fallback.
- SEO metadata, Open Graph tags, canonical URLs, sitemap, robots file, Person structured data, and project structured data.
- Accessible semantics, keyboard focus states, WCAG-oriented contrast, and reduced-motion support.
- Static route entry files generated for GitHub Pages.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Complete portfolio homepage |
| `/projects/` | Selected-work index |
| `/projects/sustainable-telecom-churn/` | Applied ML case study |
| `/projects/business-ai-automation-hub/` | Business automation case study |
| `/projects/hybrid-cloud-monitoring-platform/` | Cloud monitoring capstone case study |

## Stack

- Vue 3
- Vue Router
- Vite
- SCSS
- Static GitHub Pages deployment

No component framework, icon library, tracking script, or runtime content API is required. Content is imported locally for a fast and predictable initial load.

## Local development

Requirements: Node.js 22+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The build command creates the optimized app and route-specific HTML entry files in `dist/`.

## Contact form

The repository intentionally does not invent or reuse a third-party form account. Copy `.env.example` to `.env.local` and set the endpoint supplied by the chosen provider:

```env
VITE_CONTACT_FORM_ENDPOINT=https://your-secure-form-endpoint.example
```

When no endpoint is configured, the form opens the visitor's email client with a prepared message and clearly says that no submission was stored or delivered by the site.

See [docs/CONFIGURATION.md](docs/CONFIGURATION.md) for content and form configuration, [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) for information architecture and wireframes, and [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for publishing instructions.

## Source of truth

- Portfolio content: `src/data/portfolio.js`
- Views: `src/views/`
- Reusable components: `src/components/`
- Visual system: `src/scss/style.scss`
- Portrait and project artifacts: `public/images/`
- Downloadable résumé: `public/pdf/Jehosua-A-Joya-Resume.pdf`
- Editable résumé source: `docs/resume-source.html`

## Content integrity

The site intentionally avoids testimonials, client logos, unverified commercial outcomes, completed AWS/Terraform certification claims, production LLM claims, and fake product screenshots. Career metrics are labeled as documented past results, not future guarantees.
