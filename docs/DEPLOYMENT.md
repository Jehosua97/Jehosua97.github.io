# Deployment

## GitHub Pages

This repository is configured for the root user site `https://jehosua97.github.io/`, so Vite's base path remains `/`.

The workflow at `.github/workflows/deploy.yml` runs when `main` is updated or when triggered manually. It uses Node.js 22, installs dependencies with `npm ci`, builds the portfolio, and publishes `dist/` to the `gh-pages` branch.

### Repository settings

1. Open **Settings → Actions → General**.
2. Allow GitHub Actions and give workflow permissions read/write access.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch** and use the `gh-pages` branch at `/ (root)`.
5. If live form delivery is configured, add its endpoint as the repository secret `VITE_CONTACT_FORM_ENDPOINT` under **Settings → Secrets and variables → Actions**.
6. Push to `main` or manually run the deployment workflow.

### Route handling

`npm run build` creates an `index.html` inside every public route directory plus a `404.html` fallback. Direct visits to project URLs therefore work on GitHub Pages without hash-based URLs.

## Pre-deployment verification

Run:

```bash
npm ci
npm run build
npm run preview
```

Then verify:

- `/`
- `/projects/`
- All three project detail routes
- `/pdf/Jehosua-A-Joya-Resume.pdf`
- Portrait and project images
- Email, phone, LinkedIn, GitHub, Credly, and repository links
- Contact delivery with the production endpoint
- Mobile navigation and keyboard focus

## Custom domain

If a custom domain is connected later:

1. Add the domain in GitHub Pages settings.
2. Add a `public/CNAME` file containing the domain.
3. Update all canonical URLs listed in `docs/CONFIGURATION.md`.
4. Confirm HTTPS enforcement.
5. Re-test direct project routes and Open Graph previews.

## Other static hosts

The contents of `dist/` can also be deployed to Netlify, Cloudflare Pages, Vercel, or any static host. Configure the build command as `npm run build` and the output directory as `dist`.
