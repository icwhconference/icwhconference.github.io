# ICWH — International Conference for Women in Healthcare

This repository contains the static website for ICWH suitable for deployment via GitHub Pages.

Deployment notes
- The site is static (HTML/CSS/JS) and requires no build step. Serve from the `main` branch root.
- A `CNAME` file is present for the custom domain `icwhconference.org`. Configure your DNS A records and/or ALIAS as per GitHub Pages documentation.
- To test locally: run `python -m http.server` in the repo root and open http://localhost:8000

Structure
- index.html — permanent ICWH homepage (brand) highlighting the current edition.
- /2026/index.html — edition page for ICWH 2026. Create `/2027/`, `/2028/` etc. for future editions.
- style.css, script.js — site assets
- assets/ — images, icons and logos (replace placeholders with your branded assets)

Recommended next steps
- Replace SVG placeholders in `assets/images` with high-quality hero and OG images.
- Add real sponsor logos to `assets/logos/` and update the Partners section.
- Replace mailto links with a proper registration capture (Formspree, Netlify Forms, or a backend) when ready.

If you want, I can:
- Configure DNS records for the custom domain (I will show the exact records you need to add),
- Add a GitHub Pages workflow or settings to enable the site, or
- Replace placeholders with images you provide.
