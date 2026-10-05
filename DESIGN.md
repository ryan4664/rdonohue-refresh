---
name: rdonohue.ca
description: Ryan Donohue's personal site, written as his terminal scrollback.
colors:
  bg: "#0d0f11"
  fg: "#d4d7d9"
  dim: "#7d858d"
  black: "#2a2f35"
  red: "#ef6b5e"
  green: "#9ad27a"
  yellow: "#f0c75e"
  blue: "#6aaeff"
  magenta: "#d28ad8"
  cyan: "#63d0c4"
  bright-black: "#7d858d"
  bright-red: "#ff8a7f"
  bright-green: "#b7e69c"
  bright-yellow: "#ffdb85"
  bright-blue: "#94c6ff"
  bright-magenta: "#e7a9ec"
  bright-cyan: "#8fe5da"
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
  section: "4.5rem"
  commit: "2.25rem"
  command: "1.25rem"
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
  prompt:
    textColor: "{colors.green}"
    typography: "{typography.title}"
  link:
    textColor: "{colors.fg}"
  link-hover:
    textColor: "{colors.cyan}"
  mail-link:
    textColor: "{colors.bright-white}"
    typography: "{typography.headline}"
  cursor:
    backgroundColor: "{colors.fg}"
    width: "1ch"
    height: "1.25em"
---

# Design System: rdonohue.ca

## Overview

**Creative North Star: "The Scrollback"**

The page is Ryan's terminal after he has run a few commands: a prompt, then the real output, then the next prompt. Every section is a command and what it printed (neofetch, `cat README.md`, `git log`, `cat ~/.contact`), and a tmux status line pinned to the bottom does the navigating. Nobody types anything. Everything is already printed, and every link is a plain link.

It is a dense, quiet, single-column world on near-black. One monospace family does all the work, and rank comes from the variable font's width and weight axes, not from a second face or a size jump. Colour comes from a custom 16-colour ANSI theme, and each hue keeps the job a terminal would give it. There are no surfaces, cards, shadows or rounded corners. The character grid is the layout.

The user set two limits: not too stiff and not too flashy. The terminal has no glow, no window chrome and no traffic-light buttons. It fills the viewport like a fullscreen session, not a screenshot of an app.

**Key Characteristics:**
- Dark only. The world is a terminal, and terminals are dark.
- One family (Martian Mono, variable). The width axis carries rank.
- Colour by ANSI role, never as decoration.
- Flat, square and borderless. Spacing is measured in `ch`.
- Motion is instant or stepped. Only the cursor blinks.

## Colors

A muted 16-colour ANSI theme on near-black, where each hue has a fixed terminal job.

### Primary
- **Prompt Green** (green): prompt user@host, neofetch keys, the `ryan@rdonohue` line, branch refs, the whole tmux status bar, text selection and the caret. It is the colour of the shell itself.

### Secondary
- **Hash Yellow** (yellow): commit headers and short hashes, plus inline `code` in prose.

### Tertiary
- **Ref Cyan** (cyan): the `HEAD ->` ref, link hover (text and underline) and the focus ring. Cyan is the colour that means "you can act here".
- **Path Blue** (blue): only the `~` path segment in the prompt.

### Neutral
- **Scrollback Black** (bg): the page and `html` background, and text on the green tmux bar.
- **Terminal Grey** (fg): running text, prompt sigils (`:` and `$`), the cursor block.
- **Comment Grey** (dim, also bright-black): link underlines at rest, the neofetch dash rule, list dashes. It measures about 5:1 against bg, so it stays legible.
- **Bold White** (bright-white): the name, role headings in the git log, company names in the oneline log, the contact email.
- **Ansi Black** (black): scrollbar thumb, and first cell of the swatch row.

### Swatch-only hues
Red, magenta and the bright variants of red, yellow, blue, magenta and cyan appear only in neofetch's two-row swatch strip, which prints the whole theme. Bright green appears in the swatches and as the tmux window hover.

### Named Rules
**The ANSI Roles Rule.** A hue is used only for the job a terminal gives it: green for the shell and prompt, yellow for hashes, cyan for refs and interaction, bright white for bold names. Red and magenta stay in the swatch row until a real role (an error, a diff) needs them.

**The Dark Only Rule.** There is no light theme. `color-scheme: dark` and the bg colour are the only canvas.

## Typography

**Display Font:** Martian Mono, variable (weight 100-800, width 75-112.5%), self-hosted, with ui-monospace, Menlo, monospace as fallbacks
**Body Font:** Martian Mono (the same family)

**Character:** A single humanist-leaning mono, set narrow (87.5% width) for reading and pushed out to its widest, heaviest cut (112.5%, 760) for the two things a visitor should remember: the name and the email.

### Hierarchy
- **Display** (760, clamp 1.9-3.1rem, 1.05, width 112.5%, -0.02em tracking, word-spacing -0.3em): Ryan's name in the neofetch block, in bright white. Word spacing is tightened because mono spaces are full-width.
- **Headline** (760, clamp 1.5-2.9rem, 1.1, width 112.5%): the contact email under `cat ~/.contact`, wrapping anywhere when needed.
- **Title** (700, 1em, width 87.5%): prompt user@host, neofetch keys, git log role headings, branch and tag refs. Bold at body size is how a terminal shows emphasis.
- **Body** (400, clamp 14-17px, 1.65, width 87.5%): all running text. Prose is capped at 72ch, commit entries at 76ch and the oneline log at 90ch.
- **Label** (400, 13px, width 87.5%): the tmux status line. At 640px and below it drops to 12px at 75% width.

### Named Rules
**The Width Is Rank Rule.** Rank comes from the width and weight axes, not from new faces: 112.5/760 for the name and email, 87.5/700 for keys and headings, 87.5/400 for text, and 75 only where the status bar runs out of room. Never add a second family.

**The No Uppercase Rule.** Nothing is uppercased or letter-spaced for effect. Case and spacing are whatever the command would print.

## Layout

A single left-aligned column, as in a terminal: top-left origin, max-width 1100px, horizontal gutter `clamp(16px, 5vw, 72px)`, 1.5rem top padding. The bottom padding clears the fixed status bar plus 4rem. Sections sit 4.5rem apart and their scroll-margin keeps the prompt visible when you jump to them. A prompt line sits 1.25rem above its output. Commits are 2.25rem apart and paragraphs 1rem.

Indents and gaps inside output use the character grid: 1ch between a key and its value, 4ch to indent a commit message, a 2ch hanging indent for `- ` list items, an 8ch hanging indent so oneline entries wrap clear of the hash, and a 3.5ch column gap in neofetch. The swatch strip is 8 columns, each 3ch wide.

Neofetch is a two-column grid (portrait, then info). At 640px and below it stacks to one column and the portrait shrinks to 240px. In the status bar, the session name hides at 640px and below and the location hides at 400px and below.

### Named Rules
**The Character Grid Rule.** Inside terminal output, horizontal measures are in `ch`. Vertical rhythm between blocks is in rem.

## Elevation & Depth

Fully flat. There are no shadows, no glow and no overlapping surfaces. The only layering is the status bar, fixed above the scrollback (z-index 1), and it is set apart by its solid green fill, not by elevation.

### Named Rules
**The Flat Scrollback Rule.** Separation comes from colour, weight and whitespace. If a new element seems to need a shadow or a panel behind it, it should be printed output instead.

## Shapes

Square everywhere: zero radius, no borders, no frames. The recurring forms are character-shaped: the block cursor (1ch by 1.25em), the swatch cells (3ch by 1.3em), the neofetch dash rule and the inverted active-window cell in the status bar. The 2px cyan focus ring is the only outline.

## Components

### Prompt line
The section header of this world. It reads `ryan@rdonohue:~$ <command>`, with user@host bold green, `~` blue and the sigils in regular-weight fg. The prompt is `aria-hidden`, and each section carries a visually hidden h2 for structure. Long flags are wrapped in nowrap spans so a flag never breaks in the middle.

### Links
- **Rest:** inherit the text colour, with a dim underline offset 0.25em.
- **Hover:** the text and underline both turn cyan. The change is instant.
- **Focus:** a 2px cyan outline offset 3px.
- **Mail link (display):** bright white at headline size, with a 0.06em underline. It turns cyan on hover.

### Navigation (tmux status line)
A fixed 2rem bar on the bottom edge, filled green with bg-coloured label text. It shows `[rdonohue]`, then windows `0:neofetch` through `3:contact`, then the right-aligned location `"regina, sk"` and a live Regina clock (24h, refreshed every 30s). Windows have 0.5ch of padding. The active window is inverted (bg fill, green bold text) and marked with a trailing `*`, as tmux does. Hover on an inactive window fills it bright green. The current window follows scroll: it is the last section whose top has passed 45% of the viewport, or the last section once the page reaches the bottom. Inside the bar the focus outline switches to bg and is inset by 2px.

### Neofetch block (signature)
Portrait on the left, info on the right: the name in display type, a green `user@host` line, a dim dash rule, then a definition list of bold green keys with fg colons and values, then the 16-cell swatch strip.

### Pixel portrait (signature)
Ryan's own photo (`ryan-cropped-2.jpg`, shipped unmodified) is shown first as `ryan-px.png`, a 40x40 downscale made with `sips -s format png -z 40 40`. It is rendered with `image-rendering: pixelated` at integer scales only: 320px (8x) on desktop and 240px (6x) on mobile. On hover the real photo resolves over it in four stepped frames (240ms, `steps(4, end)`). Devices without hover show the real photo outright. Both files carry embedded provenance comments. Any new pixel image must also be a true integer downscale, shown at an integer multiple.

### Commit entry
A yellow `commit <hash>` header, with refs in parentheses (cyan bold `HEAD ->`, green bold branch name), then `Date:` in fg with git's own spacing. Under it sits a message indented 4ch: a bright-white bold heading, a short line, and a list with `- ` markers and hanging indents. Older roles use the oneline format instead: a yellow hash, then the company name in bright white, then a plain description.

### Cursor
A solid fg block at the final prompt, 1ch wide, blinking at 1.06s with `steps(1)`. It stops under `prefers-reduced-motion`. It is the only thing on the page that animates continuously.

### Named Rules
**The Instant Terminal Rule.** State changes are instant or stepped, never eased. Only the cursor blinks, and not under reduced motion.

**The Printed Not Typed Rule.** Commands are shown already run, with their output. Never ask a visitor to type or wait for an input.

## Do's and Don'ts

### Do:
- **Do** frame new content as a real command and its real output, with a prompt line above it.
- **Do** pick colours by ANSI role: green for shell and keys, yellow for hashes and dates, cyan for refs and interaction, bright white for bold names.
- **Do** set rank with Martian Mono's width and weight axes: 112.5% and 760 for headline moments, 87.5% for everything else.
- **Do** measure indents and gaps inside output in `ch`.
- **Do** keep motion instant or stepped, and respect `prefers-reduced-motion`.
- **Do** scale pixel images by whole numbers only, with `image-rendering: pixelated`.

### Don't:
- **Don't** add a light theme. The world is dark only.
- **Don't** add glow, scanlines, window chrome or traffic-light buttons. The session is fullscreen and plain.
- **Don't** introduce cards, panels, shadows, rounded corners or skill badges.
- **Don't** add a second typeface or uppercase tracked labels.
- **Don't** make visitors type commands to reach content.
- **Don't** use red or magenta decoratively. Outside the swatch strip they wait for a real terminal role.
