# Aman Pipare portfolio

A responsive two-page portfolio built with plain HTML, CSS, and JavaScript. The theme picker applies seven complete palette and type treatments and remembers the selection in the browser.

## Files

- `index.html` — home, project notebook, contact form, and theme picker
- `about.html` — about and current learning areas, with the same theme picker
- `styles.css` — responsive design and seven visual theme variants
- `script.js` — theme switching, theme persistence, current year, and email form

## Seven visual themes

- **Editorial** — warm paper, serif headlines, forest green accents
- **Signal** — navy and blue, crisp sans-serif, technical layout
- **Terminal** — green monochrome, square edges, code-like typography
- **Brutalist** — bold yellow, black outlines, hard shadows
- **Grove** — soft sage and leafy shapes
- **Amber** — warm parchment, rust and ochre
- **Monochrome** — grayscale, restrained typography

## Run locally

1. Keep all four site files together.
2. Double-click `index.html` to open it in your browser.
3. The theme options at the top switch styles; your choice stays saved in that browser.
4. To use a local server, open a terminal in this folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.

## Personal details and contact

The site uses the name Aman Pipare and `amanpiparex92@gmail.com`. The contact form validates the fields and opens the visitor’s email app with a message addressed to that Gmail account. It does not send messages directly from the website.

Project entries are prompts for your actual work, not completed project claims. Replace them with real project names, descriptions, GitHub links, demos, and measured outcomes as you build them. The skills copy is intentionally framed as learning areas.

## Publish free

### GitHub Pages

1. Create a public GitHub repository.
2. Upload the four website files to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Visit the URL GitHub Pages provides.

### Netlify Drop

1. Create a free Netlify account.
2. Upload this folder or a ZIP of it through the manual deploy / drag-and-drop option.
3. Open the public URL Netlify provides.

## Image generation note

This build uses original CSS illustrations so it can run without image assets. The requested built-in image-generation tool was unavailable in this chat. If you want generated artwork, the skill’s CLI fallback requires an `OPENAI_API_KEY` and explicit confirmation to use that fallback.
