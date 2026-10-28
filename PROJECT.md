# Decisions

One line per decision: the date, who asked, what was decided and why. The newest at the top.

- 2026-10-28, Samuel (« créer page work et page projet individuelle… transitions… X fermer le projet… tabs en haut de work »; decided by Claude): Work and the project pages are built.
  `/work` (the nav's Work; `/archives`, the current site's address, redirects to it) is ArchiveIndex on `.theme-signal`, rows from `src/data/work.ts`: the 20 published projects with a year, read from the Videos collection (drafts left out: Apple News +, Aqua Hacking Fest, Phi's three films, Starbucks Summer, Yoplait). The page of a project is `/videos/<slug>` (the addresses the home already points to), also the two second parts (Altitude Sports B, Rendez-vous design B, linked by « Part A » / « Part B » at the top right) and `/videos/demo`.
  The layout follows the captures of the current site: columns at 0, 25, 52 and 80 % of the width, a hairline under every row, a ring before each heading (filled on the sort in use), the row's picture centred on the pointer in its own shape. The pictures are the Photo Hover Archives, GIFs turned into animated WebP 480 px wide (`public/work/`, 2 MB for 19 files, fetched one after another once the page is quiet, not on a touch screen or with the data saver on). The film page follows the captures too: Sound Off and the X at the top right, the title low on the left with « Infos » (its ring fills) in the second column, the credits under them (the title and Infos rise by the credits' height, transform only), a progress line across the foot that thickens while the credits are up, and a press on the film pauses it (« Pause » follows the pointer, « Play » when stopped). The nav no longer catches the pointer between its words (`pointer-events: none` on the bar), so the film's controls under it work.
  Sorting: pressing a heading fades the list out (`--duration-fast`), reorders it while it is clear and fades it back in (`--duration-medium`), both on `--ease-smooth`, opacity only, no fade under reduced motion (superseded on Oct 28, twice: the rows no longer glide, `--sort-stagger` is gone; then the arrival is the rows rising, see the entry on the sort's tempo). The sort is kept in the history entry of the page (beside Astro's own scroll), so the X (`history.back()` when the project was reached from the site, else a link to `/work`; Escape does the same once the credits are shut) brings back the same list in the same order at the same scroll, without the opening rise. Part links use `data-astro-history="replace"` so the X never stops on the first part. Transitions: from the home the clicked film grows into the page (unchanged); from Work, the row's picture, when a mouse showed it, is named `film` on the click and grows into the film (a fade on a touch screen or without a picture); closing fades back.
  Copy: credits written once from the desktop columns. Industry « Arts and Culture » (Festival La Noce) written « Arts & Culture » as every other row (it would have sorted apart). Differences between the desktop and mobile credits of the current site, left as the desktop says: Seed « Ari Brebre » (mobile: Berber), Spotify « Makeout Agency » (mobile: MakeOut), Équiterre's client credit « Deux Huit Huit » (mobile: Deux Huit), « Productor » and « Director of prod » (Altitude Sports). To check with the client. Not done: the films' first frames (none in the project; the signed Vimeo links can expire and there is no 720p file), a film playing was not seen (no network to Vimeo here), a reverse transition from the film back into its row.
- 2026-10-28, Samuel (« la grille que l'app montre ne semble pas être la bonne »; decided by Claude): the page grid's token is renamed `--page-columns` to `--site-columns`, the name integrations/op-system.mjs reads for OP System's « Grille ». Under the old name the app drew its default 12, 8 and 4 columns over a site laid out on 7 and 2. Nothing changes on the pages.
- 2026-10-28, Samuel (« trop de differences avec le site actuel. taille de typo, espacements, et animation d'ouverture/fermeture des accordeons », on About; decided by Claude): About matches the live site's proportions, measured on the capture of the live About page (1728 px) and checked against it (the rules and the lists land within 1 px). From 992 px the type and spaces are the live site's own vw, set once in base.css (a second `:root` block under `@media (width >= 62rem)`): text 1.4vw (not under 14 px), small 1vw (not under 12 px), h1 3vw, site margin 2vw, gutter 1vw, nav height from them, and new tokens `--page-top` (content starts 10vw from the top), `--page-bottom` 5vw, `--accordion-pad` .8vw, `--accordion-body-pad` 2vw, `--accordion-dot` .6vw, `--list-gap` .3vw, `--list-group-gap` 1vw, `--statement-gap` 1.5vw, `--head-gap` 4vw (each has a fluid value under 992 px, where the 2.5vw of the live site would fall to 10 px on a phone). Line heights are the live site's: 1.2 text, 1.15 titles (`--text-main-line-height`, `--h1-line-height`). The nav and the home follow (2vw margin, 1.4vw links, the nav's top margin 1.2 x the site margin), so its type grows with the screen as the live site's. The statement, the address and the accordion titles keep their whole line box (`text-box: normal`) because the live site counts its spaces from line edges, not from the capitals. Layout: portrait three sevenths of the width, one margin, then the text; Selected Clients in four columns 27 % apart, six names each; Creative Partners and Send love letters with the labels 27 % wide. Accordions (the `dot` variant): height 0.6 s on `--ease-smooth`, the content rises 0.5 x its padding while it fades in (and the reverse on closing), the ring fills over the same 0.6 s (new `--accordion-duration`, `--accordion-ease`). Not readable from the export: the exact values of the live site's Accordion Open and Close (it gives the actions: size, move, opacity, rotate, background colour, not their durations or distances); 0.6 s is the one accordion timing in its CSS (the row's opacity). Phone and tablet widths are not changed except the statement's line height and the Selected Clients names in two columns.

- 2026-10-28, Samuel (« regarde attentivement les références, le site en ligne actuellement, pour que ça match
  visuellement », two captures of the live home; decided by Claude): the home matches the live site's look. Frames are
  50 % of the width by 28 % (55 % by 33 % under a mouse), as the CSS says, not 16:9. The seven numbers are seven equal
  columns across the full width (no side margin), with the bottom space of the capture. The nav is the live site's:
  the name at the left, About over Work stacked at 26 % of the width, and no « Fr »: the live site hides it on every
  page (`.fr-hide`, `.hide`), so Nav shows the language link only when a `language` prop is given (no page gives one:
  the Fr / En question stays open). `--nav-height` 3.5 to 5.25 rem for the two-line nav, links 24 px high at least (WCAG
  2.2) instead of 44. The nav change reaches every page (home, Composantes, 404). Not copied: the half-and-half split of
  the capture, a frame caught between two films.

- 2026-10-28, Samuel (« reproduire exactement le même comportement » as the current site's home; decided by Claude): the
  home's ReelHome follows the current site's behaviour, read from the archive's home page (its HTML, its CSS and its
  Webflow interactions), and no longer cycles. At rest the demo reel plays small in the middle (50 % of the width, 16:9),
  opens to 55 % under a mouse, with « Play Demo » centred on the pointer. A number under the pointer (or the keyboard's
  focus) grows every frame to the full screen over 0.5 s, the demo goes and that number's film plays; the other numbers
  fall back to the dimmed text; leaving the numbers brings the demo back full screen and shrinks it to its place.
  Under 992 px the demo (its phone file) fills the screen. Removed, as asked: the Pause control and the number's
  progress line, and with them the 2 s cycle (the current site's timer changes classes that have no visible effect above
  991 px, which the diagnostic had read as a visible cycle) and the token `--reel-duration`. New tokens:
  `--reel-grow-duration` (500 ms) and `--reel-grow-ease` (the site's own ease on that growth). Kept from the direction
  (not in the current site): the click's shared-element transition to the project page instead of the 500 ms wait, the
  keyboard's focus doing what hover does, the numbers shown under 992 px (the current site hides them there), and the
  first frame under reduced motion. The frames grow by their width and height inside the clipped stage, as the current
  site does, not by transform. The demo's two files are the Videos collection's « demo » entry (signed Vimeo links, they
  can expire). Not verified: a real Vimeo film (no network in this session; checked with local test films), a phone's
  touch.

- 2026-10-27, Samuel (« batit la homepage basé sur le zip archive »; decided by Claude): the home page is built:
  `src/pages/index.astro` replaces the starter's page with ReelHome over the nav (`overlap`), one sr-only h1
  (« Amélie Haeck, motion designer ») and a description from the site's own copy (motion designer, Montreal). The seven
  films, their order, titles and the demo address are read from the archive's home page (« Amélie Haeck.html ») and the
  Videos CSV: starbucks, softstart, rdvdesign-a, cna, 2-x-2, projet-5-indigo, kombi, in `src/data/home.ts`.
  StarterHome.astro is no longer used by any page. Open: the films are the current site's signed Vimeo links (they can
  expire; the same file serves phone and computer, no 720p version), and no first frame exists, so the ground stays
  black until a film plays. Not verified: a film playing (no network to Vimeo in this session), the touch behaviour.
  The film that grows into its project page needs the pages /videos/<name>, still to build.

- 2026-10-27, Samuel (the components step, way « same »; decided by Claude): the site's components are built and shown
  on `composantes`. Section: ReelHome (the numbered reel). Content: FilmPlayer, TextControl, ArchiveIndex, Statement.
  Lumos's AccordionItem gets a `plus` variant (About's accordions). The nav is the current site's three words in one
  row (no hamburger), over a film when `overlap`; the layout takes `footer` (off: the current site has none) and
  `language` (the nav's « Fr » or « En », default « Fr » to /contact-fr, to settle with the client: the current links
  disagree). `"transition": "custom"` is on in op.config.json with `TransitionCustom.astro` (the film followed from the
  home continues into its page as one element, `view-transition-name: film`; other changes fade through the ground);
  loader and smooth scroll stay off, as the direction decided. New tokens in base.css: `--reel-duration` (2 s, the
  cycle) and `--rise-stagger` (40 ms). New global classes in project.css: `.plus-mark` and `.rise`; `.pointer-follow`
  now fades in with `data-on`. The pointer label and thumbnail follow the mouse through `src/utils/pointer-follow.ts`
  (time-based smoothing, about 150 ms) and not GSAP, which the site does not load. Sound choice: localStorage
  (`ah:sound`), applied at the first gesture. Still to come with the pages: the films and first frames (none in the
  project; the Vimeo links expire), the content collection of the 30 films, the Archives thumbnails as loops or WebP,
  the credits' corrections listed in the diagnostic. Not verified here: a real film playing, the shared-element
  transition between two built pages (the pages step), a phone's touch.

- 2026-10-27, Samuel (the Web System step, third pass, way « same »; decided by Claude): the system is complete on
  review. Motion tokens added to src/styles/base.css from the current site's own timings: `--duration-faster` to
  `--duration-slow` (150, 250, 350, 800, 1200 ms), `--ease-arrive` cubic-bezier(0.795, 0.071, 0.25, 1) (the site's
  arrive curve; `--ease-osmo` now points to it so the starter's parts follow), `--ease-smooth` set to the site's out curve
  cubic-bezier(0.19, 1, 0.22, 1), `--ease-leave` added, `--ease-rebound` removed (no overshoot in this brand). Hover 150,
  open 350, page arriving 800, page leaving 440 ms (55 %). New tokens `--dim-opacity` (0.3, the site's 30 %) and
  `--hairline-height`. New file src/styles/project.css, imported by global.css in the patterns layer, with the three
  global classes the site repeats: `.dim-others`, `.hairline`, `.pointer-follow` (DESIGN.md, Components). The layout and
  Section accept `theme="signal"`. DESIGN.md has the system's sections (Scale with the old-to-token gaps at 390 to 1440,
  Colors, Typography, Layout, Shapes, Motion, Components). Scale model B (Lumos's fluid default, 1440 max): text no longer
  grows past 20 px above 1440 (the current site reached 27 px at 1920). Loader, transition and smooth scroll stay off in
  op.config.json: the custom transition is written at the components step with its file. Still to settle with the team:
  red on white 3.5:1 on Archives and About, the Beausite Classic web licence, h2 to h6 and text-large (the site has none).

- 2026-10-27, Samuel (the direction step, way « same »; decided by Claude, to validate with the diagnostic): DESIGN.md
  (Direction, Performance) written from the diagnostic. Signature: the numbered reel (the home's numbers 1 to 7 over the
  film, with a line that fills over each film's 2 s and pauses). No loader, a custom page transition (the film grows
  into its project page as a shared element, other changes fade through the ground), no smooth scroll, no scroll
  reveals. The current site's arrive curve cubic-bezier(0.795, 0.071, 0.25, 1) becomes `--ease-arrive` at the
  components step. To settle: red on white contrast on Archives and About (3.54:1).

- 2026-10-27, Samuel (the Web System step, second pass, way « same »; decided by Claude): the sizes, spaces, radii and
  motion of src/styles/base.css are now read from the current site's stylesheet (the Webflow export, counted) and the
  analysis « Ce qu'est le site actuel », rounded to the system, not the starter's. Type, in px from 320 to 1440 (the site
  is in vw, 1.4vw = 20 px at 1440): display 64 to 120 (the project numbers, 8.5vw), h1 36 to 44 (the contact title, 3vw),
  h2 to h6 30 to 20 in small steps (the site has none: provisional), text-large 22 to 28 (provisional), text-main 18 to
  20 (1.4vw, 18 px on a phone), text-small 12 to 14 (1vw, 12 px on a phone). Line heights 1, 1.15, 1.2 and 1.3 (the site
  uses 1 to 1.2; 1.3 is for running text, a choice). No tracking (the site sets none). Spaces on a step of 4 and 8
  (space-1 4 to 6 up to space-8 64 to 96), margin 16 to 32 (2vw to 3vw), gutter 12 to 24 (1vw to 2vw), sections 40 to
  144 (page top 10vw, bottom 5vw). Radii 0: the site has none (only the round dots, `--radius-round`). Accordions open in
  350 ms (the site's 0.35 s), hovers 150 ms. The font is self-hosted: public/fonts/BeausiteClassic-Regular.woff2, made
  from the export's OTF (complete, not subset), `@font-face` points at it. New theme `.theme-signal`: red text and lines
  on white, the About and Archives pages; new role `--text-dim` (white at 20 % on dark, the dimmed numbers and rows).
  Contrast: red on white 3.54:1, white on red 3.54:1, red on black 5.92:1, white on black 21:1. To check with the team:
  red on white fails 4.5:1 for text under 24 px, and the About and Archives pages are 14 to 20 px red text on white as
  they are today (keep as is, or black text with red accents on `.theme-light`). Not tokens: the site's 8 one-use
  colours (test classes), Webflow's breakpoints (991, 767, 479: the system's screens are 992, 768), the 4-column archive
  grid (a page layout, for the components step). The Beausite Classic web licence is still to confirm with the client.

- 2026-10-27, Samuel (the Web System step, way « same »; decided by Claude): src/styles/base.css carries the current
  site's own values and nothing else. Swatches: `--white` #ffffff, `--white-2` 20 % white, `--red` #fe3d30 (the three
  variables the import read from the Webflow styles) and `--black` #000000 (provisional: the site's ground is not
  in what was read, a video portfolio on black is assumed). The theme roles: `.theme-dark` (the default, `:root`:
  black ground, white text, `--white-2` lines, red as accent and focus), `.theme-light` (its inversion) and
  `.theme-brand` (red ground, white text). The type is one family, Beausite Classic 400 (`--primary-family`, an
  `@font-face` on the OTF the Webflow site hosts); `--primary-medium` and `--primary-bold` are 400, so the browser
  never fakes a weight. `brandColor` in op.config.json is the red. The type scale, the spaces, the radii and the
  motion are the starter's, kept as provisional: the Archive 9.zip in the Brief and the site's stylesheet could not be
  downloaded in this session (no network), so no size, space or ground was measured. To do: read the zip, check the
  ground and the sizes, put the font file in public/fonts and point the `@font-face` at it.
  Contrast: white on red 3.5:1 (large text only), black on red 6.0:1, red on black 6.0:1.

- 2026-10-27, Sam (night plan, Bloc 8d: « optimiser les documents pour Claude, sans perdre l'info importante »;
  decided by Claude overnight, Sam asleep): CLAUDE.md says each rule once and without its history: the dates and who
  asked left the rules whose date does not serve them (their history is in this file), « How to build with Lumos » and
  « Lumos for Astro is not Lumos for Webflow » point to AGENTS.md, which every session loads with CLAUDE.md and says
  both, and the pointer to op-system's README follows its move to `docs/` (`docs/bridge.md`, `op:reveal`). No rule
  changed: a script found every rule-like line of CLAUDE.md and AGENTS.md before in the two after (op-system's night
  report). AGENTS.md is Lumos's own file, as its authors publish it: unchanged.

- 2026-10-27, Sam (Oct 26: Lenis, page transitions with three simple presets or one Claude makes from an idea, a
  loading screen, each per project; decided by Claude overnight, Sam asleep): the finishing touches are op.config.json
  keys, each `false` or a preset: `loader` mark, counter or curtain (`true` stays the mark), `transition` fade, slide or
  curtain on Astro's own router (never Barba, which would fight it; `transitions: true` stays the slide),
  `smoothScroll` light, medium or strong (Lenis, loaded only where it runs: not with reduced motion, not on a touch
  screen unless `smoothScrollTouch`), and `custom` for the site's own file Claude makes. site.json announces each with
  the presets the site has, so OP System's « Expérience » can show, replay and ask for them. The curtain wears
  `.theme-brand`; the counter counts toward 90 while the page loads, then to 100. site.json no longer announces a
  transition only because PageTransitions.astro holds `<ClientRouter />`: the built pages say whether the router is on,
  and Lenis is listed among the libraries only where it runs. The Slider answers OP System's `op:reveal`.

- 2026-10-18, Sam (« est-ce que ça pourrait être plus rapide… aussi seamless que Webflow », then « go pour tout »): OP
  System's « Mettre en ligne » puts the site live itself through its GitHub App (main moved to the version seen on the
  staging, a fast-forward only), with a bar to the site itself; a request to Claude only when the App is not on the
  repository, done from the connector's guide (`get_guide("astro")`, Live), the one source of those steps. The launch
  writes `domain` and `live` in op.config.json, and `SITE_URL` reads `domain` from it.

- 2026-10-18, Sam: `npm run shot` (scripts/shot.mjs) takes the built pages as full-page PNGs at the widths asked, with
  no browser downloaded, and CLAUDE.md (Check what you changed) says which pages to look at by what changed, at the
  comment's width and at 390, before a change is called done. A session had lost three turns on its own screenshots
  (Playwright missing, a wrong first picture, a window too tall) and had not looked at the phone width.

- 2026-10-17, Sam (« je te fais confiance pour les décisions »): a new site starts from OP System's « Un nouveau site »
  (Cloudflare's Deploy button on this repository, which must be public for it; by hand until then), then a request of
  kind `setup` to Claude. The team's « Mettre en ligne » in OP System is the ask to publish (requests `publish` and
  `launch`, the only queue work that reaches `main`). Every build serves secure headers and fails when `dist/` holds a
  secret key, so a key never reaches the published site. Design and motion follow OP's craft (the connector's guides
  `direction` and `critique`, or OP's skills). Wrangler 4.135 at least, for `wrangler preview`.

- 2026-10-17, Sam (« un loading screen par projet et un langage de transition entre les pages, comme Barba, intégré
  dans l'UX de l'app »): every site has a loading screen and page transitions ready, both off until the team turns
  them on in op.config.json (`loader`, `transitions`), so OP System can show and replay them. The loading screen wears
  the site's mark on its ground, once per tab session; the transitions are Astro's view transitions (the page lifts
  away, the next one rises in, on the site's eases), a crossfade with reduced motion. Each is restyled per client.

- 2026-10-17, Sam: the starter wears OP System's look, not Lumos's (no Lumos logo, colours, cover or showcase page;
  the credit in README.md and LICENSE only). The swatches, themes and first page are replaced with the client's.
- 2026-10-17, Sam: the site starts from OP's starter `official-partner/op-astro` (Lumos for Astro 1.0.0). `main` is
  the live site, `review` the one OP System shows; content in files until a CMS is decided.

- 2026-10-27, Sam (setup): the site's language is English, so SITE_LOCALE is en-CA and SITE_DESCRIPTION is in English; the Worker is amelie-haeck (wrangler.jsonc); loader, transition and smooth scroll stay off.

- 2026-10-27, Sam (the Marque step, way « same »): the brand guide is written in OP System (Marque), short version, from
  the diagnostic, the direction and the export: no logo (the name in Beausite Classic is the mark; the client
  confirms), the palette in four tokens (`--black`, `--white`, `--red`, `--white-2`; red on white is 3.54:1, to settle),
  one family at 400, a four-line voice read from the site's copy, the films as the only images, the current site's two
  curves and its durations. Marked « À valider » in the guide: the logo, the typeface's web licence, the voice, the
  films' source files, the motion curves (base.css still holds the starter's two curves; the Web System step aligns
  them). Four typos listed as pairs in the voice, to confirm with the client.

- 2026-10-27, Sam (the compare step, way « same »): the name is written « Amélie Haeck » in SITE_NAME and the default
  description (it had lost its accent; op.config.json keeps the project's own name). The 404 page, still in the starter's
  French, is in English like the site. No page of the current site is built yet (the home is the starter's), so the
  comparison covers the system, the components and the numbers; the Brief's note « Comparaison avec le site actuel »
  says what each page still owes.
- 2026-10-27, Sam (the compare step): the one font file is preloaded in BaseHead (the direction asks for it).
- 2026-10-28, Sam: no max width anywhere on this site. The tokens (--max-width-*), their utilities, the nav, footer, container and slider limits, and the characters-wide limit props of Heading, Paragraph and RichText are gone; the layout runs edge to edge between the site margins. Only the 100 % guards on images and icons and the widths of the Modal panel and the Dropdown menu stay.
- 2026-10-28, Sam (page request « About », from the design joined and the Brief): /about is built from the current site's Contact page, copy word for word (src/data/about.ts); the one error kept out is « Phi » written twice in Selected Clients. Layout from the design: portrait on the left (three sevenths), statement and email at the same size, three accordions with the ring that fills (new `dot` variant of AccordionItem); on a phone the statement, the portrait, then the parts. New components: AboutSheet, NameList, RoleList (with samples in Composantes). The portrait's file is not in the Brief: its place stays an empty 4 to 5 block until the client gives it. Open for the client: « Motion designer at Apple » (this page) against « Motion designer and Art Director » (/contact-fr), the email written « bonjour[a]ameliehaeck.com » (its brackets look like bars in this font), and /contact-fr, not built, so the nav's « Fr » stays hidden.
- 2026-10-28, Samuel (comments 1 to 6 on About and the home, review; decided by Claude): the page grid. New token `--page-columns` (base.css): two columns under 62rem, seven from 62rem (as the home's seven numbers), gap `--site-gutter`, sides `--site-margin`. Nav: the name in the first column (two on desktop), About over Work in the third column on desktop and in the second (half the screen) on a phone; the nav has no background of its own any more (the page's words scroll under it). About: the portrait spans columns 1 to 3, the statement and the three parts columns 4 to 7; Selected Clients is one name column to each of those four; the labels of Creative Partners and Send love letters take the first of the four, their names the rest; on a phone everything is across two columns (names in two, label and names side by side). The statement's address keeps its descenders (it was clipped by its mask: same padding and negative margin as the title's lines). The three lists of About carry `data-op-list` / `data-op-item` (source src/data/about.ts), so the app's list tools can add or move a name; the copy stays in src/data/about.ts. Home reel: the films load before a number is hovered: the pointer within a third of a screen above the numbers loads the film of its column and the neighbours, and once the demo is ready the other films load one after another (not on a phone, not with the data saver on). The film files' addresses in src/data/home.ts contain « file.mp4%20%28720p%29.mp4 »: to check against the Vimeo links.
- 2026-10-28, Samuel (comment 7 on About, « simplifier: mouvement subtil et opacité sur tous les éléments de la page »; decided by Claude): the opening is now a fade with a small rise (`.rise`: opacity 0 and 1 rem lower, new token `--rise-distance`, 800 ms on `--ease-arrive`, 40 ms between elements), on the element itself: no more masks. About: the statement's two lines, the address, the portrait and the three accordions; Archives' rows follow (same class). The statement's mask padding is gone. Nothing moves under reduced motion.
- 2026-10-28, Samuel (request on About, « mets cette image-là dans la page About comme photo »; done by Claude): the portrait is in place (src/assets/about/amelie-haeck-portrait.jpg, shown through Img in the 4 to 5 block of AboutSheet, cover and centred, eager and high priority as the first image in view). The file received in the chat was the app's reduced copy (1854 x 2000 px, 104 KB, the original is 2000 x 2157 px): kept as is, to replace by the original if the team wants it sharper on large screens. Alt text written by Claude: « Amélie Haeck seated on a sculpted dark chair against a pale studio wall, smiling and looking off to the side. »

- 2026-10-28, Samuel (request in the Claude tab on the film page and Work; done by Claude): (1) the X of a project already goes back to where the person came from (home or Work, same scroll, same sort) through the history, and to Work only when the page was opened from outside; checked in a browser from the home and from Work, no change needed. (2) Credits open: a dark veil (35 % black) over the whole film plus a gradient deepening to the foot (up to 55 % black), `.film-player_shade`, opacity only on `--open-duration` with the credits. Colours from `--black`, no new token. (3) Sort of Work: fade out, reorder, fade in instead of the rows gliding (Sorting, above). (4) Row hover pictures: the current site's Archives page uses the same `Photo Hover Archives` pictures as this one (animated WebP in `public/work/`, 20 rows); the collection's `Video Thumbnail` field is the home's film, not Work's. Nothing added; the three rows whose picture is a still screenshot (Altitude Sports, Indigo, Rendez-vous design) are stills on the current site too.

- 2026-10-28, Samuel (« la liste work devrait etre alignée sur la grille… 8 colonnes? »; done by Claude): Work's list sits on the page grid (`--site-columns`, `--site-gutter`) the nav and About already use, instead of its own percentages (25, 52, 80). From 62rem, on the seven columns: year over columns 1 and 2, client from the third (under the nav's About and Work), project over the fifth and sixth, industry in the seventh; checked against the grid drawn over the page at 1440 and 1000 px. From 48rem the two phone columns each halved (client still at the middle of the screen, project beside it, industry dropped); under 48rem year and client on the two columns (project dropped, as under 30rem before: it was shown from 30 to 48rem). Kept seven columns, not eight: the nav, About and the home's numbers are already on seven, and the four columns take two, two, two and one of the seven. The old 8-column reading of the current site (0, 25, 50, 75 %) would have meant moving all of them.

- 2026-10-28, Samuel (« tab click: fade out plus lent > fade in avec movement y staggered. plus lent/smooth », on Work; done by Claude): the sort's tempo on Work. The list fades out on `--duration-medium` (350 ms, was 250), is reordered while clear, then each row fades in while rising `--rise-distance`, one after the other (`--rise-stagger` 40 ms, the whole stagger held under 600 ms), each on `--duration-base` (800 ms) and `--ease-smooth`. Same tokens as the page's opening rise, no new one; opacity and translate only; no animation under reduced motion; a second press cancels the first. Checked in a browser at 1440 px (rows at opacity 0 then rising in order).
- 2026-10-28, Samuel (« Expérience du site: Défilement fluide, Moyen », from the app; done by Claude): `"smoothScroll": "medium"` in op.config.json (Lenis, lerp 0.1, off with reduced motion and on touch screens). The preset was already in the site. Checked on the home (one screen, nothing to scroll) and About (Lenis active, the wheel glides after the event, no script error).

- 2026-10-28, Samuel (« quand on trie les projets puis on hover la liste: bug animations qui se font concurrence », on Work; done by Claude): after a sort, the rows' rise (opacity, WAAPI) and the hover dimming of the other rows (opacity, CSS transition) wrote the same property at once, and the picture of the hovered row stayed from before the sort. Now the list carries `data-pause` from the press until the last row has arrived: `.dim-others[data-pause]` (src/styles/project.css) holds the rows at full opacity with no transition, the hover picture is hidden at the press, and when the sort is over the dimming comes back eased and the row under a resting pointer shows its picture. A later press cancels the first as before. Built and checked (0 errors); not replayed in a browser.
