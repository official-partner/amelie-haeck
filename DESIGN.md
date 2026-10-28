# Amélie Haeck: design

## Direction

Written 2026-10-27 (the direction step, way « same »), from the diagnostic and the analysis of the current site (the
Brief's notes `diagnostic` and `current-site`). It waits for the team's validation, with the diagnostic; the Marque and
the components follow it. The way « same » keeps the current site's look: this says how it is carried into the system
and where it is pushed, not a new look.

### Subject
Amélie Haeck, a motion designer in Montreal (« Motion designer at Apple based in Montreal », the About page; the French
page says « Motion designer and Art Director »: the client settles it). Her trade is the film: the edit, the cut, the
loop, the first frame, the opening title, the end credits (client, art direction, music). Her clients are agencies and
brands (Starbucks, SSENSE, Spotify, Deux Huit Huit, Seed, KOHO). The site is a reel cut into numbered films, an index
that reads like credits, and a contact sheet of names.

### Reader and job
Art directors, producers and agencies, often on a laptop, sometimes from a link on a phone. One job: watch her work at
once, then find who she worked with and write to her. Nothing stands between the first second and a film.

### The engine, named and kept
1. **The films are the home.** Seven films full screen, one at a time, and the numbers 1 to 7 very large at the foot of
   the screen as the only navigation. Hovering a number brings its film; clicking opens it.
2. **The film takes the whole page.** Each project page is its film, with quiet text controls: Sound Off / Sound On,
   Infos (the credits over the film), the + that becomes ×.
3. **What follows the pointer, on an inverted palette.** « Play Demo » follows the pointer on the home; on Archives the
   hovered row's thumbnail follows it and the other rows dim. Black and white for the films, red on white for the words.

### Signature
**The numbered reel.** The seven numbers in Beausite Classic, display size, white on the film: the index and the
timeline at once. Pushed in three ways, all from the current site's own moves:
- the current number carries a thin line that fills over the film's 2 s, so the cycle shows its time (and pauses);
- the clicked number's film grows into its project page as one element (a shared element on Astro's router), instead
  of the current 500 ms wait before the link;
- the same numbers come back nowhere else: Archives is a list by year, never numbered.

On a phone (no hover): the seven numbers in one row at the foot (display at 64 px fits seven at 390 px), the cycle runs
on the phone's lighter files, a tap opens the film; « Play Demo » sits fixed above the numbers instead of following.
Under reduced motion: no cycle, the first film's still frame (its poster) with the numbers over it; hovering or
focusing a number swaps the still; the page change is a short crossfade.

### Type
One family, Beausite Classic 400, no other weight (the browser never fakes one), no tracking, capitals from CSS.
- Display: the home's numbers only (`--display`, 64 to 120 px), one line, tabular, set on the foot of the screen.
- h1: the About statement (36 to 44 px, line height 1.15), red on white, two lines broken by hand as today.
- Text: everything else, menu, lists, credits, controls (`--text-main`, 18 to 20 px, line height 1.2). The menu is text,
  never buttons in boxes.
- Small: the foot and the legal line only (`--text-small`).
The current 1vw and 1.4vw become fluid tokens: text no longer falls to 10 px on a phone nor grows past 20 px.

### Colour
- `.theme-dark` (black ground, white text, `--text-dim` at 20 %): the home, the project pages, the credits panel.
- `.theme-signal` (white ground, red text and lines): Archives and About, as today.
- The red is the site's only accent: the active sort's dot, the About statement, focus on dark. It never goes over a
  film, never as a ground behind text (white on red is 3.54:1) and never on the home.
- To settle with the team: red on white is 3.54:1, under 4.5:1 for the 18 to 20 px lists of Archives and About. Kept as
  today (the way « same »), unless the team chooses black text with red accents there (`.theme-light`).

### Layout, page by page
Home: the film fills the screen; the bar on top; the numbers on the foot. The only page with no scroll.
```
desktop                                   phone
+-----------------------------------+     +-----------------+
| Amélie Haeck   About Work      Fr |     | A.H.  About Work|
|                                   |     |                 |
|        [ film, full screen ]      |     |  [ film, full ] |
|                  Play Demo  <-ptr |     |    Play Demo    |
| 1  2  3  4  5  6  7               |     | 1 2 3 4 5 6 7   |
| -                                 |     | -               |
+-----------------------------------+     +-----------------+
```
Project page: the film is the page, the controls in the corners in text; Infos lifts the credits over it.
```
+-----------------------------------+     +-----------------+
| Sound Off              Infos   +  |     | Sound    Infos +|
|        [ film, full screen ]      |     |  [ film, 16:9 ] |
| Title             ---progress---  |     | Title           |
+-----------------------------------+     | credits (Infos) |
                                          +-----------------+
```
Archives: an index in four columns, sortable by its headings; the hovered row's thumbnail follows the pointer.
```
+-----------------------------------+     +-----------------+
| Year*  Client   Project  Industry |     | Year*  Client   |
| 2025   KOHO     The Bank...  Tech |     | 2025   KOHO     |
| 2024   Seed     VS-01™   Health.. |     | 2024   Seed     |
|            [thumb follows]        |     | (tap: the film) |
+-----------------------------------+     +-----------------+
```
About: the statement large, the email under it, then three accordions (Selected Clients, Creative Partners, Send love
letters); on a phone the same, one column. The rhythm moves from a still screen (home, film) to a long list (Archives) to
a short page that opens (About).

### Images
The films are the images: each starts on its first frame as a poster (the LCP, opaque from the first paint), the film
fades in over it once it plays. Files sized to the screen (720p on a phone, 1080p from 992 px), on a host the client
keeps (the signed Vimeo links can expire: the files are to obtain). Archives' thumbnails become short muted loops (MP4,
WebM) or WebP, never GIF. Every picture gets its alt from the project's title and client.

### Motion
- Loader: none. The first frame is already the work; a loader would add a wait to a page whose job is to show a film.
- Page transition: custom (`"transition": "custom"`, TransitionCustom.astro): from the home or Archives, the film
  continues into its project page (a shared `view-transition-name` on the followed film only); every other change
  fades through the ground, the current site's « Click Home » made a real transition. The nav holds still. Reduced
  motion: a short crossfade. Never a delay before a link.
- Smooth scroll: none. Two of the four pages do not scroll, and Archives is a list read with the browser's own scroll.
- Reveals: none on scroll. Each kind of page has one opening: the home's film over its poster (slow) while the numbers
  simply show; Archives' and About's lines rise from their masks once (the current « Contact Load », base, stagger
  0.04 on the rows); the project page's controls fade in after the film (medium).
- The rhythm, from the current site: its arrive curve cubic-bezier(0.795, 0.071, 0.25, 1) becomes the site's
  `--ease-arrive` for what is watched (base 800 ms, the page arriving, the credits panel); its out curve
  cubic-bezier(0.19, 1, 0.22, 1) is the starter's `--ease-smooth` for what answers (hover 150 ms, accordions 350 ms,
  the pointer labels with `quickTo`). Leaving takes about 55 % of arriving.
- Fixed from the current site: the credits and the accordions no longer animate their height or ground colour (a
  transform, an opacity, an accordion's height with `interpolate-size`); the cycle pauses on hover, focus, off screen,
  hidden tab and reduced motion, and has a Pause control by « Play Demo » (WCAG 2.2.2); the pointer labels run only on a
  fine pointer.

### Voice
Short, factual, in English: a name, a role, a city, a list. Credits read as a film's end titles (role, then name), no
selling line, no exclamation.

### Keep, push, fix
| Part | Keep | Push | Fix |
| --- | --- | --- | --- |
| Look | black, white, red #fe3d30 in their roles; one family, one weight; no radius, no shadow | the fluid scale holds the proportions from 320 to 1440 px | the vw sizes (10 px text on a phone), the 37 colours of tests and Webflow, red on white contrast (to settle) |
| Engine | the films cycling every 2 s, the numbers as navigation, the film as the page, the labels following the pointer | the film growing into its page (shared element), the timer's line, the openings timed together | the 500 ms waits, height animated, slow-start curves on answers |
| Content | every text, film, credit and address (/videos/<slug>, /archives, /about, /contact-fr) | credits written once per film (one source for desktop and mobile) | the errors listed in the diagnostic, one h1 a page, a title and a description per page |
| Behaviour | sound toggle remembered, Infos, sort, accordions, the B parts linked | the sound choice remembered in every browser; keyboard and screen readers on every control | jQuery, js-cookie, Finsweet, Webflow's runtime, dead code, Universal Analytics |
| Performance | (none) | the targets below | the numbers of the diagnostic |

### The translation, said once
The current site's vw sizes and spaces became fluid tokens in base.css (the Web System step: small differences are
normal, said when they show). Webflow's 16 interactions and its jQuery become the site's own scripts on Astro's router
(op-site-js). Its 330 classes become components (the numbered reel, the film player, the credits panel, the index row,
the accordion) and, where the same treatment repeats, the project's global classes in src/styles/project.css.

### The generic test
A plain prompt for « a motion designer's portfolio » gives: a counter loader 0 to 100, a showreel hero with a big
headline, a grid of project cards that play on hover, a custom cursor everywhere, Lenis and a fade-up on each section, an
about block with a portrait and a contact button, mono labels, near-black with one acid accent. What it changed here:
no loader (the first frame is the work); no card grid, the numbers stay the navigation; the pointer labels only where
the current site has them (Play Demo, the Archives thumbnail); no smooth scroll and no scroll reveals; no mono, no
eyebrows, no arrows on links. Kept though it reads as a default, tied to the brief: the red on black and white is the
client's own palette (way « same »); the numbers 1 to 7 are a real sequence (the order of the cycle), never padded to 01.

## Scale

The system is read from the current site's own stylesheet (Webflow export, counted) and the direction. Written 2026-10-27
(the Web System step, way « same »). Model B, Lumos's fluid default: each size is a line between its phone value at 320 px
and its desktop value at 1440 px (`--viewport-min`, `--viewport-max`), then stops. The current site is in vw (342 of its
1 266 lengths, 27 % of them, 144 spaces and 27 font sizes); it grew with the screen and fell to 10 px on a phone. Each vw
value became a token whose desktop end is the current px at 1440 and whose phone end is a reading floor.
Gap between the old value and the token (px), at 390 / 768 / 1024 / 1280 / 1440:

| Token | Old (vw) | Token | Where it shows |
| --- | --- | --- | --- |
| display, the numbers (8.5vw, 10vw under 992, 65 and 60 px) | 60 / 77 / 87 / 109 / 122 | 68 / 86 / 99 / 112 / 120 | +12 at 1024: the seven numbers hold one row at 390 |
| h1, the About statement (3vw, 35 px) | 25 / 23 / 31 / 38 / 43 | 37 / 39 / 41 / 43 / 44 | +10 at 1024, +12 on a phone: the 36 px floor |
| text-main, menu and lists (1.4vw, 2.5vw under 992) | 10 / 19 / 14 / 18 / 20 | 18 / 19 / 19 / 20 / 20 | +9 on a phone, +5 at 1024: the 18 px floor |
| text-small (1vw, 12 px) | 12 / 12 / 12 / 13 / 14 | 12 / 13 / 13 / 14 / 14 | under 2 px |
| site margin (2vw) | 8 / 15 / 21 / 26 / 29 | 17 / 22 / 26 / 30 / 32 | +9 on a phone: pages breathe at 390 |
| site gutter (1vw) | 4 / 8 / 10 / 13 / 14 | 13 / 17 / 20 / 22 / 24 | the archive rows keep a readable gap |

Beyond 1440 nothing grows (the current site's text reached 27 px at 1920). The line-break index of the About statement
is the one team check left for the pages step. Values within 2 px of another token became that token; 29 font sizes became
display, h1 to h6, large, main and small (the site uses four of them: h2 to h6 and large are the system's, provisional).

## Colors

Four swatches in `:root`: `--white` #ffffff, `--black` #000000, `--red` #fe3d30 (the three the site declares, plus the
black of its home), and `--white-2` (white at 20 %, the site's own `#fff3`). The 36 others of the 40 colours in its CSS are
Webflow's components or trials with no visible use: no token. Themes, by role (every role in every theme):
- `.theme-dark` (the default): black ground, white text, the home, the film pages, the credits panel.
- `.theme-signal`: white ground, red text and lines, Archives and About.
- `.theme-light`, `.theme-brand`: the inversion and the red ground, kept for the system; the pages do not use them.
Contrast, computed: white on black 21:1, red on black 5.9:1, red on white 3.5:1, white on red 3.5:1.
**The Red Is Words Rule**: red is text and lines on white, and the focus and the sort's dot; never a ground behind text
and never over a film.
**To settle with the team**: red on white (3.5:1) is under 4.5:1 for the 18 to 20 px lists of Archives and About. Kept as
today; the alternative is black text with red accents on `.theme-light`.

## Typography

One family, Beausite Classic 400, self-hosted (`public/fonts/BeausiteClassic-Regular.woff2`, from the export's OTF; the
web licence is still to confirm with the client). Medium and bold are 400 on purpose: the browser never fakes a weight.
No tracking, no capitals in the tokens (capitals come from CSS where a page needs them). Styles (size at 320 / 1440,
line height): display 64 / 120, 1.0 (the numbers only); h1 36 / 44, 1.0; h2 30 / 36; h3 26 / 30; h4 22 / 26; h5 20 / 22;
h6 18 / 20 (h2 to h6 provisional, the site has none); text-large 22 / 28, 1.2; text-main 18 / 20, 1.3; text-small
12 / 14, 1.3. The current site sets line heights of 1 to 1.2: the 1.3 is for running text, a choice.
**The One Weight Rule**: hierarchy is size and colour, never weight.

## Layout

Margin 16 to 32, gutter 12 to 24, sections 40 to 144 (the page top is the site's 10vw, its foot 5vw), spaces 1 to 8 on a
step of 4 and 8 (4 to 6 up to 64 to 96). No max width anywhere: the layout runs edge to edge between the site margins. The 4-column index of Archives is a page
layout, built with the grid at the components step. Screens: desktop from 992, tablet 768 to 991, phone under 768
(Webflow's 991, 767 and 479 are not carried).

## Shapes

No radius and no shadow, as the site: `--radius-small` and `--radius-main` are 0; `--radius-round` is for the sort's dot
and the pointer label if it is a disc. Rules are `--border-width` (1 px) in the theme's border role.

## Motion

The contract, in tokens (the current site's own timings, rounded to OP's tiers): productive, what answers, `--duration-faster`
150 ms for a hover and its leaving, `--duration-fast` 250 ms, `--duration-medium` 350 ms for an accordion, the credits
and the + turning (the site's 0.35 s) on `--ease-smooth` cubic-bezier(0.19, 1, 0.22, 1), the site's own out curve.
Expressive, what is watched, `--duration-base` 800 ms (the page arriving, the opening) and `--duration-slow` 1200 ms (the
film fading in over its poster) on `--ease-arrive` cubic-bezier(0.795, 0.071, 0.25, 1), the site's own arrive curve;
`--ease-osmo` is Lumos's name for it, which the starter's parts read. A page leaves in 440 ms (`--page-leave-duration`,
55 % of arriving). `--ease-leave` only for what leaves the screen. No overshoot: `--ease-rebound` is out.
Fixed from the current site: no height, padding or margin animated, no slow-start curve on an answer. Finishing touches,
as the direction decided: loader off, smooth scroll off, transition off in op.config.json until the components step writes
`TransitionCustom.astro` (a key set to `custom` without its file would stand in as the slide preset).

## Components

Written 2026-10-27 (the components step, way « same »). Each is on the Composantes page with a sample from the
client's own copy deck; no film or first frame is in the project yet (the films are Vimeo links that expire), so the
samples show the black ground. Every script is in `onPage` with its signal, written for a visit that does not reload.

| Component | File | What it is |
| --- | --- | --- |
| ReelHome | section/ReelHome.astro | The home: films stacked, one at a time, the numbers 1 to 7 on the foot. The number in use carries a `.hairline` that fills over `--reel-duration` (2 s), the cycle's timer. Hover or focus on a number shows its film (cut, no dissolve); the cycle waits on the pointer or focus in the numbers, off screen, a hidden tab and the Pause control; under reduced motion no cycle, the first frame, the line still full. A film is made when it is next (its first frame, then its file; 720p on a phone). A click gives the film `view-transition-name: film` (the router's shared element). « Play Demo »: the label follows a mouse (`.pointer-follow`), a real link stays for touch and keyboard. |
| FilmPlayer | content/FilmPlayer.astro | A project page: the film fills the screen on its first frame, fades in once it plays, paused off screen and in a hidden tab; progress is a `.hairline` scaled by transform; Sound Off / Sound On (kept in localStorage, applied at the first gesture); Infos lifts the credits (role then name, written once, `.dim-others`) over the film, Escape closes; the link to the other part of a project in two films. The controls are on the foot, since the nav holds the top. |
| TextControl | content/TextControl.astro | The text controls, never boxes: one or two states in one cell (no width change), the + (`.plus-mark`) turning to ×; hover and focus look the same; press scales to 0.97. |
| ArchiveIndex | content/ArchiveIndex.astro | Archives' index: four columns, sorted by its headings (a second press reverses; the dot marks the one in use), the hovered row keeps its place and the others dim, the row's picture follows a mouse. Industry drops under 48em, Project under 30em, as today. Rows are a `data-op-list`. |
| Statement | content/Statement.astro | The About statement: the page's one h1, red on white, lines broken by hand, rising once; the address under it. |
| AccordionItem, variant plus | interactive/AccordionItem.astro | Lumos's accordion with the + of two hairlines that turns to × (About's three parts). |
| Nav | global/Nav.astro | Name, About and Work, the other language at the edge, in one row on every screen (no hamburger). Over a film (`overlap`) it has no ground. |
| TransitionCustom | system/TransitionCustom.astro | `"transition": "custom"`: the page fades out through the ground in 440 ms and the next fades in on the arrive curve; a film followed from the home continues into its page as one element; the nav holds still; reduced motion a short crossfade. CSS only, a link stays a link. |

Global classes (`src/styles/project.css`), the uses are the components' above:
- `.dim-others`: ReelHome's numbers, ArchiveIndex's headings and rows, FilmPlayer's credits.
- `.hairline`: ReelHome's timer, FilmPlayer's progress, the + of `.plus-mark`.
- `.pointer-follow`: ReelHome's label, ArchiveIndex's picture (moved by `src/utils/pointer-follow.ts`, time-based, about 150 ms, kept inside the window, fine pointers only).
- `.plus-mark` (new): the + made of two hairlines, × when `aria-expanded="true"` or its details are open: TextControl, AccordionItem.
- `.rise` (new): elements that fade in while rising a little (`--rise-distance`) as the page arrives (`--i`, `--rise-stagger` 40 ms): ArchiveIndex, Statement.
Not classes: the 4-column index (ArchiveIndex's own grid), the film frame (`cover-absolute`).

Where the sketches above moved: on a project page the controls sit on the foot (Sound at the left, the title, Infos at
the right) because the nav keeps the top, as on the current site. The phone nav keeps the full name (it fits at 390).
The pointer follows with a small time-based smoothing written in 40 lines, not GSAP, which the site does not load: the
site's own JS stays far under 30 KB.

## Performance

Checked at each page's build, beside the current site's numbers (the diagnostic).

| Target | Current site |
| --- | --- |
| LCP under 2.5 s, CLS under 0.1 on a slowed phone, INP under 200 ms | not measured; 8 films loading at once on the home |
| The site's own JS under 30 KB gzipped a page (GSAP apart) | about 277 KB a page, 362 KB on Archives (Webflow, jQuery, Finsweet) |
| No library runtime but GSAP where a page needs it | Webflow runtime, jQuery 3.5.1, js-cookie, Finsweet cmslibrary |
| Images in AVIF or WebP with srcset, none over 300 KB on a phone | 25 images, 14 557 KB, 13 over 500 KB, GIFs up to 2 003 KB |
| Home: one film loaded (the current one, the next preloaded), its poster first | 8 films in 1080p, 17 video tags |
| Fonts in woff2, one file on first paint, preloaded | one OTF on Webflow's CDN |
| CSS under 40 KB | 176 KB, 1 884 rules |
| One h1, a title, a description and lang on every page | 0 of 3; every project page titled « Amélie Haeck » |
