# Decisions

One line per decision: the date, who asked, what was decided and why. The newest at the top.

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
