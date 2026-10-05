---
name: rdonohue.ca
description: Ryan Donohue's personal site, set like a quiet fullscreen terminal session.
colors:
  bg: "#0d0f11"
  fg: "#d4d7d9"
  dim: "#7d858d"
  black: "#2a2f35"
  green: "#86c39a"
  bright-green: "#a3d4b2"
  yellow: "#dcbc82"
  magenta: "#d28ad8"
  cyan: "#63d0c4"
  bright-white: "#f5f6f7"
typography:
  display:
    fontFamily: "Martian Mono, ui-monospace, Menlo, monospace"
    fontSize: "clamp(1.9rem, 1.1rem + 2.6vw, 3.1rem)"
    fontWeight: 760
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112.5"
  headline:
    fontFamily: "Martian Mono, ui-monospace, Menlo, monospace"
    fontSize: "clamp(1.5rem, 0.8rem + 2.6vw, 2.9rem)"
    fontWeight: 760
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112.5"
  title:
    fontFamily: "Martian Mono, ui-monospace, Menlo, monospace"
    fontSize: "1em"
    fontWeight: 700
    lineHeight: 1.65
    fontVariation: "'wdth' 87.5"
  body:
    fontFamily: "Martian Mono, ui-monospace, Menlo, monospace"
    fontSize: "clamp(14px, 0.6rem + 0.45vw, 17px)"
    fontWeight: 400
    lineHeight: 1.65
    fontVariation: "'wdth' 87.5"
  label:
    fontFamily: "Martian Mono, ui-monospace, Menlo, monospace"
    fontSize: "13px"
    fontWeight: 400
    fontVariation: "'wdth' 87.5"
spacing:
  gutter: "clamp(16px, 5vw, 72px)"
  section: "5rem"
  heading: "1.75rem"
  entry: "2.25rem"
  paragraph: "1rem"
  bar: "2rem"
components:
  tmux-bar:
    backgroundColor: "{colors.green}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    height: "{spacing.bar}"
    padding: "0 1ch"
  tmux-window:
    textColor: "{colors.bg}"
    padding: "0 0.5ch"
  tmux-window-hover:
    backgroundColor: "{colors.bright-green}"
    textColor: "{colors.bg}"
  tmux-window-active:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.green}"
  section-heading:
    textColor: "{colors.bright-white}"
    typography: "{typography.title}"
  section-heading-hash:
    textColor: "{colors.magenta}"
  info-key:
    textColor: "{colors.green}"
    typography: "{typography.title}"
  log-date:
    textColor: "{colors.yellow}"
    width: "10ch"
  link:
    textColor: "{colors.fg}"
  link-hover:
    textColor: "{colors.cyan}"
  mail-link:
    textColor: "{colors.bright-white}"
    typography: "{typography.headline}"
  cursor:
    backgroundColor: "{colors.green}"
    width: "0.55em"
    height: "0.95em"
---

# Design System: rdonohue.ca

## Overview

**Creative North Star: "The Quiet Session"**

The page reads like a fullscreen terminal that someone has tidied up. Nothing is typed and no commands are shown. The terminal feel comes from a small set of materials: one monospace family, ANSI role colours on near-black, `# section` headings with a magenta hash, a work log with a yellow date gutter, a green block cursor blinking after the contact email, and a tmux status line pinned to the bottom that handles navigation.

The world is dense and quiet: one left-aligned column on near-black. Rank comes from the variable font's width and weight axes, not from a second face. The photo is Ryan's own, shown plainly at full fidelity. There are no surfaces, cards, shadows or rounded corners. The character grid sets the layout.

The terminal is dialled back on purpose. It has no glow, no window chrome and no traffic-light buttons, and no shell prompts or command lines. It fills the viewport like a session, not a screenshot of an app.

**Key Characteristics:**
- Dark only.
- One family (Martian Mono, variable). The width axis carries rank.
- Colour by ANSI role, never as decoration.
- Flat, square and borderless. Horizontal measures inside content are in `ch`.
- Motion is instant or stepped. Only the cursor blinks.

## Colors

A soft, muted ANSI palette on near-black, where each hue has a fixed job.

### Primary
- **Session Sage** (green): a soft sage. It fills the info-list keys, the tmux status bar, the blinking cursor, text selection and the caret, and it is the colour of the session itself. As text on bg, and as bg text on the bar, it measures about 9.4:1.
- **Bright Sage** (bright-green): only the hover fill on an inactive tmux window (bg text on it about 11.5:1).

### Secondary
- **Date Sand** (yellow): a warm sand, used for the date gutter in the work log and nothing else (about 10.6:1 on bg).

### Tertiary
- **Interaction Cyan** (cyan): link hover (text and underline) and the focus ring. Cyan means "you can act here".
- **Heading Magenta** (magenta): only the `#` in section headings.

### Neutral
- **Session Black** (bg): the page and `html` background, the theme colour, text on the green tmux bar, and the active-window fill.
- **Terminal Grey** (fg): running text and the colon after each info key.
- **Comment Grey** (dim): link underlines at rest, the `- ` list markers, and secondary lines such as a role's location. It measures about 5:1 against bg, so it stays legible.
- **Bold White** (bright-white): the name, section headings, role headings, company names in the earlier-roles list, and the contact email.
- **Ansi Black** (black): the scrollbar thumb only.

### Named Rules
**The ANSI Roles Rule.** A hue is used only for its one job: green for the session (keys, bar, cursor), yellow for dates, magenta for the heading hash, cyan for interaction, bright white for bold names and headings. A new hue needs a new role first.

**The Dark Only Rule.** There is no light theme. `color-scheme: dark` and the bg colour are the only canvas.

## Typography

**Display Font:** Martian Mono, variable (weight 100-800, width 75-112.5%), self-hosted, with ui-monospace, Menlo, monospace as fallbacks
**Body Font:** Martian Mono (the same family)

**Character:** A single mono, set narrow (87.5% width) for reading and pushed to its widest, heaviest cut (112.5%, 760) for the two things a visitor should remember: the name and the email.

### Hierarchy
- **Display** (760, clamp 1.9-3.1rem, 1.05, width 112.5%, -0.02em tracking, word-spacing -0.3em): Ryan's name, in bright white. Word spacing is tightened because mono spaces are full-width.
- **Headline** (760, clamp 1.5-2.9rem, 1.1, width 112.5%): the contact email, wrapping anywhere when needed.
- **Title** (700, 1em, width 87.5%): section headings, role headings, info keys and company names. Bold at body size is how a terminal shows emphasis.
- **Body** (400, clamp 14-17px, 1.65, width 87.5%): all running text. Intro prose is capped at 62ch, log bullets at 72ch and the log at 90ch.
- **Label** (400, 13px, width 87.5%): the tmux status line. At 640px and below it drops to 12px at 75% width.

### Named Rules
**The Width Is Rank Rule.** Rank comes from the width and weight axes, not from new faces: 112.5/760 for the name and email, 87.5/700 for headings and keys, 87.5/400 for text, and 75 only where the status bar runs out of room. Never add a second family.

**The No Uppercase Rule.** Nothing is uppercased or letter-spaced for effect. Headings are lowercase, as written.

## Layout

A single left-aligned column with a top-left origin, max-width 1100px, a horizontal gutter of `clamp(16px, 5vw, 72px)` and 2.5rem of top padding. The bottom padding clears the fixed status bar plus 4rem. Sections sit 5rem apart, with a 2rem scroll-margin. A section heading sits 1.75rem above its content. Log entries are 2.25rem apart and paragraphs 1rem.

Inside content, horizontal measures use the character grid: 1ch between a key and its value, a 10ch date gutter with a 2ch gap in the work log, a 2ch hanging indent for `- ` list items, and a 3.5ch column gap between the photo and the intro text.

The intro is a two-column grid (the photo at 320px, then the info). At 640px and below it stacks to one column, the photo shrinks to 240px, and the log's date gutter stacks above each entry. In the status bar, the session name hides at 640px and below and the location hides at 400px and below.

### Named Rules
**The Character Grid Rule.** Horizontal measures inside content are in `ch`. Vertical rhythm between blocks is in rem.

## Elevation & Depth

Fully flat. There are no shadows, no glow and no overlapping surfaces. The only layering is the status bar, fixed above the content (z-index 1), and it stands apart through its solid green fill, not through elevation.

### Named Rules
**The Flat Session Rule.** Separation comes from colour, weight and whitespace. If a new element seems to need a shadow or a panel behind it, set it as plain text instead.

## Shapes

Square everywhere: zero radius, no borders, no frames. The photo is a plain square (aspect-ratio 1) with no mask, border or filter. The recurring shapes come from characters: the block cursor (0.55em by 0.95em) and the inverted active-window cell in the status bar. The 2px cyan focus ring is the only outline.

## Components

### Section heading
A bold bright-white lowercase word at body size, preceded by a magenta `# ` (aria-hidden). It is a real h2. It works as a markdown heading, not as a label above one.

### Info list
A definition list under the name: bold green keys, a regular-weight fg colon added after each key, 1ch gap, then the value in fg.

### Work log (signature)
An ordered list. Each entry has a yellow date in a 10ch gutter, then a bright-white bold role heading, a dim location line, and an optional list with dim `- ` markers and 2ch hanging indents. The last entry ("Earlier") holds a plain list of past roles: company in bright white, then a plain description, with no markers.

### Links
- **Rest:** inherit the text colour, with a dim underline offset 0.25em.
- **Hover:** the text and underline both turn cyan. The change is instant.
- **Focus:** a 2px cyan outline offset 3px.
- **Mail link (display):** bright white at headline size, with a 0.06em underline. It turns cyan on hover.

### Cursor
A solid green block (0.55em by 0.95em) right after the contact email, blinking at 1.06s with `steps(1)`. It stops under `prefers-reduced-motion`. It is the only thing on the page that animates.

### Navigation (tmux status line)
A fixed 2rem bar on the bottom edge, filled green with bg-coloured label text. It shows `[rdonohue]`, then the windows `0:about`, `1:work` and `2:contact`, then the right-aligned location `"regina, sk"` and a live Regina clock (24h, refreshed every 30s). Windows have 0.5ch of padding. The active window is inverted (bg fill, bold green text) and marked with a trailing `*`, as tmux does. Hover on an inactive window fills it bright green. The active window follows scroll: it is the last section whose top has passed 45% of the viewport, or the last section once the page reaches the bottom. Inside the bar the focus outline switches to bg and is inset by 2px.

### Photo
Ryan's own photo (`public/assets/ryan.jpg`, supplied 2026-10-05, shipped unmodified, with an embedded provenance comment), shown plainly as a 320px square (240px on mobile). Treat any replacement the same way: a real photo, unfiltered and unprocessed.

### Named Rules
**The Instant Terminal Rule.** State changes are instant or stepped, never eased. Only the cursor blinks, and not under reduced motion.

## Do's and Don'ts

### Do:
- **Do** open new sections with a lowercase `# name` heading: magenta hash, bright-white bold word.
- **Do** pick colours by role: green for keys, the bar and the cursor; yellow for dates; magenta for the heading hash; cyan for interaction; bright white for bold names and headings.
- **Do** set rank with Martian Mono's width and weight axes: 112.5% and 760 for headline moments, 87.5% for everything else.
- **Do** measure horizontal gaps and indents inside content in `ch`.
- **Do** keep motion instant or stepped, and respect `prefers-reduced-motion`.
- **Do** add navigation as tmux windows (`n:name`) in the status bar.

### Don't:
- **Don't** add a light theme. The world is dark only.
- **Don't** add shell prompts, command lines or neofetch-style output. The terminal is suggested, not acted out.
- **Don't** add glow, scanlines, window chrome or traffic-light buttons.
- **Don't** introduce cards, panels, shadows, rounded corners or skill badges.
- **Don't** add a second typeface or uppercase tracked labels.
- **Don't** filter, pixelate or stylise the photo.
