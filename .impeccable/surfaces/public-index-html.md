---
version: 1
slug: "public-index-html"
primary_target: "public/index.html"
related_targets: []
---

# rdonohue.ca homepage

Scope: the whole single page at `public/index.html`. Mode: Read (visitor's success = knows who Ryan is, what he's worked on, how to reach him).

Constraints: email link only (ryan@rdonohue.ca), no backend. Nobody ever has to type a command; everything is printed and every link is a plain link. User ruled out "too stiff" and "too flashy". Photo `ryan-cropped-2.jpg` stays. Dark only: the user pinned a terminal world, and terminals are dark.

Unresolved: titles and dates for the pre-2021 roles are unknown. Show them without dates and never invent any.

## Direction contract

THESIS: The page is Ryan's terminal scrollback. Each section is a command and its real output (neofetch, cat README.md, git log, cat ~/.contact), with a tmux status bar as navigation. It refuses the dev-portfolio default (centred hero, cards, skill badges) and the fake-shell gimmick where visitors have to type.

OWN-WORLD: Custom 16-colour ANSI theme on #0d0f11: fg #d4d7d9, dim #7d858d, green #9ad27a (prompts, tmux field), yellow #f0c75e (hashes, dates), cyan #63d0c4 (refs, link hover), red/blue/magenta for swatches and syntax roles only. Martian Mono variable; the width axis carries rank (112.5 bold for names, ~87.5 for running text). No glow, no window chrome, no traffic lights.

STORY: neofetch gives who-at-a-glance, README gives Ryan in plain dev voice, git log shows Sticker Mule as HEAD followed by older roles as oneline commits, and the visitor leaves with the email.

FIRST VIEWPORT: `ryan@rdonohue:~$ neofetch` top-left. Photo as half-block pixels (~320px) on the left; info on the right (name expanded bold, a rule, green keys, email included), with ANSI swatches below. `$ cat README.md` begins near the fold. A green tmux bar is fixed at the bottom with window links and Regina local time.

FORM: Terminal Session, user-pinned by steer after two re-rolls (not from the ordered list); seed key 9310aebd. Signature interaction: the half-block photo resolves to the real photo on hover (touch devices show the real photo outright), and the tmux active window tracks scroll. Motion: instant like a terminal; only the cursor blinks, and not under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
