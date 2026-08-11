# Portfolio configuration

## Content

All primary site content is stored in `src/data/portfolio.js`. This includes:

- Identity and contact information
- Impact metrics
- Employer and business audience paths
- Projects and project artifacts
- Services and delivery process
- Professional experience
- Education and credentials
- Technical toolkit

Keep the displayed name exactly as `Jehosua A. Joya, MCS, MBA, B.Eng.` whenever it appears.

## Contact delivery

The contact form supports any provider that accepts a standard `POST` with `FormData` and returns a successful HTTP status. Formspree is one compatible example, but no provider is assumed.

1. Create a form with the chosen provider.
2. Copy `.env.example` to `.env.local`.
3. Set the provider's HTTPS endpoint:

```env
VITE_CONTACT_FORM_ENDPOINT=https://form-provider.example/your-form-id
```

4. Restart the Vite development server.
5. Submit a test inquiry and verify both the provider dashboard and receiving inbox.

For GitHub Pages, add the same value as the Actions repository secret `VITE_CONTACT_FORM_ENDPOINT`; the deployment workflow passes it to Vite at build time.

The form includes browser validation, an invisible honeypot field, a minimum interaction time, explicit consent, and visible success/error states. The provider must still supply server-side spam controls, retention rules, and data-processing terms.

If the variable is blank, the site uses a transparent `mailto:` fallback. It never displays a false success message.

## Project artifacts

Only real or explicitly marked artifacts belong in `public/images/projects/`.

- The churn images are outputs from the project's public Jupyter notebooks and published README results.
- The automation visuals use real node names and states from its public n8n workflow definitions. They are repository views, not claimed product screenshots.
- The capstone page contains a clearly labeled replacement panel until an approved dashboard or architecture capture is supplied.

Each image entry in `src/data/portfolio.js` needs:

- A descriptive `alt` text
- A factual caption
- A stable local file path
- Confirmation that the image is safe to publish

## Professional portrait

The optimized portrait is `public/images/profile/jehosua-joya.jpg`. Preserve the supplied original outside the repository. If the source changes, export a square JPEG at approximately 960 × 960 pixels and keep it under roughly 250 KB where practical.

## Résumé

The site downloads `public/pdf/Jehosua-A-Joya-Resume.pdf`. The readable source is `docs/resume-source.html`.

To regenerate it with Chrome on Windows:

```powershell
& 'C:\Program Files\Google\Chrome\Application\chrome.exe' `
  --headless `
  --disable-gpu `
  --no-pdf-header-footer `
  --print-to-pdf='C:\absolute\path\to\public\pdf\Jehosua-A-Joya-Resume.pdf' `
  'file:///C:/absolute/path/to/docs/resume-source.html'
```

Open the generated PDF and confirm that it contains two Letter-sized pages and that links remain clickable.

## SEO and domain

The canonical production URL is currently `https://jehosua97.github.io/`, matching the repository remote. If a custom domain is added, update:

- Canonical and Open Graph URLs in `index.html`
- URLs generated in `src/router.js`
- Person and project structured data
- `public/sitemap.xml`
- `public/robots.txt`
- `public/site.webmanifest`
- URLs in `scripts/generate-static-routes.js`

## Claims checklist

Before changing content, confirm that:

- AWS Solutions Architect — Associate remains labeled `In Progress` until earned.
- HashiCorp Terraform Associate remains labeled `In Progress` until earned.
- Google credentials remain labeled `Google Cloud Skill Badge`, not professional certification.
- The automation project does not claim complete production LLM integrations.
- The capstone does not link to an unverified public repository.
- Past career metrics are not reframed as future client guarantees.
