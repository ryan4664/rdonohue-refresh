# rdonohue.ca

Ryan Donohue's personal site. A dark, monospace page with a terminal feel and a tmux-style status bar for navigation.

It's one static page, `public/index.html`, with no build step and no dependencies.

```sh
python3 -m http.server 8642 -d public   # http://127.0.0.1:8642/
```

Deploys on Vercel, which serves `public/` (see `vercel.json`). Product context is in `PRODUCT.md` and the design system in `DESIGN.md`.
