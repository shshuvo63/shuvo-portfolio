# Shamsul Haque Shuvo: Portfolio (Next.js)

Next.js (App Router) + TypeScript + Tailwind CSS v4, converted from the original single-file HTML portfolio.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build && npm start
```
Requires Node.js 18.18+ (20+ recommended). Fonts load from Google Fonts at build time.

## Where to edit
| What | File |
| --- | --- |
| Email, phone, WhatsApp, social links, resume, availability badge | `src/data/site.ts` |
| Education and experience entries (experience hides when empty) | `src/data/site.ts` |
| Projects (links, screenshots, challenges, future plans) | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` (logos in `src/data/skillIcons.ts`) |
| Profile photo | `public/images/profile.jpg` |
| Resume | replace `public/resume.pdf` with your own file (keep the name), or set `resume: ""` in `site.ts` to show a "coming soon" notice |
| Project screenshots | put images in `public/images/projects/` and set `image: "/images/projects/name.png"` |

## Notes
- The contact form has no backend: it validates, then opens the visitor's email app (`mailto:`).
- Project detail pages are real routes: `/projects/<slug>`.
- Styles from the original page live in `src/app/globals.css` (design tokens are CSS variables) and are applied through class names; Tailwind v4 is installed and available for new utility classes.
- Deploy: push to GitHub and import the repo in Vercel (no extra settings needed).
