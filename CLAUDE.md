# rdonohue.ca

Ryan Donohue's personal site. One static page: `public/index.html`, with all CSS and JS inline. No build, no dependencies, no framework. Keep it that way: the old Next 10 version died of dependency rot.

- Preview: `python3 -m http.server 8642 -d public`, then open http://127.0.0.1:8642/
- Deploy: Vercel serves `public/` (`vercel.json`). Nothing outside `public/` is published.

## Where the context lives

- `PRODUCT.md`: audience, voice, confirmed facts, and what must never be invented.
- `DESIGN.md` and `.impeccable/design.json`: the visual system (terminal world: custom ANSI palette, Martian Mono, tmux bar).
- `.impeccable/surfaces/public-index-html.md`: the page's direction contract.
- Design work goes through `/impeccable` (e.g. `/impeccable polish public/index.html`).

## Rules

- Voice: a developer's site. No LinkedIn language.
- Never invent roles, dates, metrics or links. Titles and dates for the pre-2021 roles are unknown.
- Contact is a mailto link to ryan@rdonohue.ca. No form, no backend.
- Nobody should ever have to type a command on the page. Everything is printed, and links are plain links.

## Status (2026-10-04)

- The redesign is finished and passed Impeccable's finish review (ship). It's committed and pushed on branch `terminal-redesign`, not merged to `main` yet.
- **Not deployed.** rdonohue.ca currently returns Vercel `DEPLOYMENT_NOT_FOUND`.
  - The Vercel CLI is logged into `ryan-3918` (teams `rdonohuenustim`, `nu-stimulus`). Ryan says that's the wrong (Nu Stimulus) account, so don't deploy there.
  - Next: `npx vercel logout && npx vercel login` with Ryan's personal account, then `npx vercel --prod`, then attach `rdonohue.ca` and `www.rdonohue.ca` to the project.
  - DNS: registrar NameSilo, nameservers at Varial Hosting. The A record already points to Vercel (76.76.21.21), and www is a CNAME to the apex. If another Vercel account still claims the domain, Vercel will ask for a TXT record at Varial.
