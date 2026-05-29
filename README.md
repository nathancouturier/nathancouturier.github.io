# Nathan Couturier portfolio

Plain HTML + CSS + JS, no build step. Drop everything in this folder at the
root of your GitHub Pages repository, commit, push.

## Files in this archive

Source code (the site itself)
- `index.html`
- `styles.css`
- `script.js`
- `content.js`   (single source of truth for FR/EN content)
- `robots.txt`, `sitemap.xml`
- `.nojekyll`    (tells GitHub Pages to serve files verbatim, do NOT delete)

Assets
- `Nathan-Couturier-CV.pdf`  (the CV the "Download CV" button points to)
- `hsbc-logo.svg`            (placeholder text logo, replace with your real one)
- `echo-logo.svg`            (placeholder text logo, replace with your real one)

## You must add this file yourself

- `portrait.jpg`   (your hero photo, 4:5 ratio, ~800x1000 px)

The site is defensive: if `portrait.jpg` is missing, the portrait area simply
hides itself instead of showing a broken image icon. Same for the logos.

## Deploy steps

1. Delete every file currently at the root of your repo
   (`nathancouturier.github.io`).
2. Drop the contents of this archive at the root.
3. Add your `portrait.jpg` at the root.
4. (Optional) replace `hsbc-logo.svg` and `echo-logo.svg` with your real logos.
5. Commit, push. GitHub Pages redeploys in 30 to 60 seconds.

## Verifying the deploy

Open in a private window so cache does not lie:
- `https://nathancouturier.github.io/portrait.jpg`   should show your photo
- `https://nathancouturier.github.io/hsbc-logo.svg`   should show "HSBC"
- `https://nathancouturier.github.io/Nathan-Couturier-CV.pdf`  should open the PDF
