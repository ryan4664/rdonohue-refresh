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

## Deploy

- Vercel project `rdonohue-refresh` on Ryan's personal account (`ryan4664`, team `ryan-donohues-projects`), connected to GitHub: every push to `main` deploys to production.
- Domains: `rdonohue.ca` and `www.rdonohue.ca`, live since 2026-10-05.
- Don't deploy to `nu-stimulus` or the `ryan-3918` login; those are Nu Stimulus work accounts.
- DNS: registrar NameSilo, nameservers at Varial Hosting. The A record is 76.76.21.21, which works; Vercel recommends switching to 216.198.79.1 / 64.29.17.1 when convenient.
