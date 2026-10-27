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
