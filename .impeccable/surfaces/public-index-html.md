---
version: 1
slug: "public-index-html"
primary_target: "public/index.html"
related_targets: []
---

# rdonohue.ca homepage

Scope: the whole single page at `public/index.html`. Mode: Read (visitor's success = knows who Ryan is, what he's worked on, how to reach him).

Constraints: email link only (ryan@rdonohue.ca), no backend. No commands, prompts or neofetch on the page; Ryan asked to dial the terminal back (2026-10-05). Ryan ruled out "too stiff" and "too flashy". Photo is `public/assets/ryan.jpg`, shown plainly with no effects. Dark only.

Unresolved: titles and dates for the pre-2021 roles are unknown. Show them without dates and never invent any.

## Direction contract

THESIS: A developer's page with a terminal feel, dialed back. Monospace, ANSI role colours, `# section` headings, and a dated work log carry the vibe; there are no shell prompts or commands. It refuses the dev-portfolio default (centred hero, cards, skill badges) and terminal cosplay.

OWN-WORLD: ANSI roles on #0d0f11: fg #d4d7d9, dim #7d858d, green #86c39a (keys, cursor, selection), yellow #dcbc82 (dates), magenta #d28ad8 (heading hash), cyan #63d0c4 (link hover, focus), bright-white #f5f6f7 (names, headings). Martian Mono variable; the width axis carries rank (112.5 bold for display, 87.5 for running text). Flat and square: no glow, no window chrome, no shadows.

STORY: Intro (photo, name, key: value facts, a two-line bio), then `# work` (Sticker Mule roles with dates, then earlier companies), then `# contact`, which ends on the email with a blinking cursor.

FIRST VIEWPORT: Photo at 320px top-left; to its right the name in expanded bold, a green-keyed list (role, company, location, email), and the short bio. `# work` begins near the fold. There is no navigation bar (Ryan removed it on 2026-10-05).

FORM: Terminal Session, user-pinned by steer after two re-rolls, then dialed back at Ryan's request on 2026-10-05 (no commands, neofetch, pixel photo or swatches); seed key 9310aebd. Signature: a block cursor blinks after the contact email. No navigation bar and no JavaScript. Motion: only the cursor blinks, and not under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
