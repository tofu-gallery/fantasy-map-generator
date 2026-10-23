# Fantasy Map Generator in the Tofu gallery

Azgaar's Fantasy Map Generator makes fantasy world maps in the browser: continents, rivers, climates,
countries and their borders, provinces, cultures, religions, towns, roads, routes and trade. Every detail can then be
edited by hand. Maps are saved as `.map` files on the person's own computer and loaded again from there, and can be
exported as SVG, PNG or JPEG pictures. It runs entirely in the visitor's browser. The current map and settings are
kept in the browser's own storage (IndexedDB and localStorage). Nothing is sent to a server of ours, and no account
is needed.

## How Tofu runs it

| | |
|---|---|
| Framework preset | `static` |
| Root folder | `site` |
| Install command | none: Tofu serves `site/` as it is |
| Build command | none at deploy (see "Rebuilding `site/`" below) |
| Output directory | `site` itself (entry page `site/index.html`) |
| Environment variables | none |
| Database | none: maps stay in the visitor's browser and in the files they save |

`site/` holds 414 files (32.0 MB), within Tofu's static hosting limits of 500 files and 50 MB. Paths and file types
follow Tofu's static rules: nothing hidden, no server or configuration names, and every file a type the host serves.

### Why a committed site, not Tofu's `vite` preset

Tofu's free static lane builds only a single-package npm Vite app whose build script is `vite build` (optionally after
`tsc`), with a plain `vite.config` and `index.html` at the app's root. Upstream's build does more. `npm run build` is
`tsc && vite build && node scripts/pwa-precache.mjs`, which fills the offline service worker's file list. Its
`vite.config.ts` sets `root: "./src"`, a sub-path `base` and its own chunking, so the entry page is
`src/index.html`. The repository root also holds a `Dockerfile`. Fitting that lane would mean editing several upstream
files, so the site is built here and committed instead.

### Rebuilding `site/`

Node 24 (`engines.node` is `>=24`), from the repository root:

```sh
ELECTRON_SKIP_BINARY_DOWNLOAD=1 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 SKIP_INSTALL_SIMPLE_GIT_HOOKS=1 npm ci
node scripts/tofu-build-site.mjs
```

The three variables are optional. They skip the Electron binary and the test browser, which a web build never uses,
and upstream's pre-commit hook. To change the app, edit `src/` or `public/`, rebuild, and commit the source and
`site/` together.

## What works, and what needs someone else's service

Works in the browser alone: generating maps (the **New Map!** button or F2), all the editors, saving and loading
`.map` files, exporting pictures and data, the 3D view, and the interface in its 29 languages (bundled).

These features call public services. None needs a key of ours, and each is used only where the app needs it:

- **Google Fonts** (`fonts.googleapis.com`, `fonts.gstatic.com`): the fonts of map labels and the heraldry sheet.
  The default map style requests them on load.
- **Workbox** (`storage.googleapis.com/workbox-cdn`): the offline service worker's library. The app registers the
  worker only on a hosted address, never on localhost.
- **Watabou's generators** (`watabou.github.io`): town, village, dwelling and dungeon previews for towns and dungeon
  markers, shown in frames and links.
- **Deorum** (`deorum.vercel.app`): the character shown in an "encounter" marker, in a frame. The About tab also
  links to it.
- **Armoria** (`azgaar.github.io/Armoria`, `armoria.herokuapp.com`): Azgaar's heraldry editor, opened in a new tab,
  and its image service for coats of arms made there.
- **A star texture** (`i0.wp.com`, from Azgaar's blog), used as the 3D view's sky.
- **Dropbox** (Dropbox's own sites, and `unpkg.com` for its SDK on `dropbox.html`): only when the person chooses to
  connect Dropbox. Its sign-in uses Azgaar's Dropbox app, which accepts only the return addresses he registered, so
  on a gallery copy's address it is expected to refuse. We did not try it. Saving and loading files on the computer
  works without it.
- **The assistant**: Azgaar's free assistant tiers (`ask.azgaarsfmg.com`) run only on `azgaar.github.io`. On any
  other address the assistant works only with a key the person enters at runtime for a provider they choose:
  OpenAI, Anthropic, Mistral, Google Gemini, DeepSeek or Alibaba Cloud (Qwen), or a local Ollama on their own
  computer. Requests then go from their browser to that provider.

The rest are plain links, opened only when clicked: Patreon, Discord, Reddit, GitHub, Cartography Assets, Wikipedia
and social sharing.

There is no advertising. The one tracking script, Google Analytics, is left out of `site/` (see below).

## What we changed, and why

Every change is a commit on the `tofu` branch. The `master` branch stays upstream's.

1. **`vite.tofu.config.ts` and `scripts/tofu-build-site.mjs` (new files).** The config wraps upstream's
   `vite.config.ts` unchanged and differs in three ways. `base` is `/`, because the app has its own address, as in
   upstream's Netlify and Docker builds. Output goes to `site/`. Google Analytics is removed from the built
   `index.html`, using the two patterns upstream's own desktop build strips; the web app manifest stays. The
   script runs the same steps as `npm run build`. It also copies `LICENSE` to `site/LICENSE.txt` and writes the
   licences of the npm packages bundled into the JavaScript to `site/THIRD-PARTY-LICENSES.txt`. It fails if the
   built page still loads Google Analytics. `src/index.html` is untouched; only the built copy changes.
2. **Removed `tests/` and `docs/updates/*/screenshots/`.** Tofu's GitHub import takes a repository archive of at
   most 50 MB, and with `site/` this one would be 62.1 MB. Removed: the end-to-end specs, their snapshots and saved
   `.map` fixtures (74 files, 25.8 MB), and the release notes' pictures (55 files, 17.1 MB). The app loads neither.
   The unit tests beside the code in `src/` stay, and so do the release notes' text, `docs/wiki` and
   `docs/architecture`, which the assistant bundles. What this copy loses: `npm run test:e2e` and
   `npm run test:scenarios` have nothing to run, and the release notes show no pictures. Both folders are still on
   `master`.
3. **`site/`.** The finished site, built from this branch as described above.
4. **`TOFU.md`.** This file.

The name, logo, favicon, the Patreon and credits links, and the About tab are unchanged.

## Upstream and licence

- Upstream: <https://github.com/Azgaar/Fantasy-Map-Generator>, branch `master`, commit
  `4536054599811565ee63fff365f28644ddcd29b7` (v1.155.0, 2026-10-23).
- Licence: the MIT License with one added paragraph, Copyright 2017-2024 Max Haniyeu (Azgaar). See `LICENSE`, kept
  exactly as upstream ships it, and its copy `site/LICENSE.txt`. GitHub shows it as "Other" because of the added
  paragraph, which grants more, not less:

  > You can produce, without restrictions, any derivative works from the original software and even reap commercial
  > benefits from the sale of the secondary product. The derivates include created maps, map images, screenshots,
  > videos, and other materials.

Caveats:

- **Bundled libraries.** `public/libs/` (copied to `site/libs/`) holds minified third-party libraries, each under
  its own licence. Most carry their notice at the top of the file: D3 (BSD-3-Clause), jQuery and jQuery UI (MIT),
  three.js and its add-ons (MIT), JSZip (MIT or GPLv3, used under MIT), jQuery UI Touch Punch (MIT or GPLv2, used
  under MIT), Delaunator, Polylabel and FlatQueue (ISC), Simplify.js (BSD-2-Clause), RgbQuant (MIT), the Alea
  generator (MIT and BSD), and the Dropbox SDK (MIT). Nothing here is used under a copyleft licence, so no source
  offer applies.
- **npm packages.** The npm packages bundled into the JavaScript (d3, three, quill, zod and what they depend on) are
  listed with their licence texts in `site/THIRD-PARTY-LICENSES.txt`, which `scripts/tofu-build-site.mjs` writes.
- **Artwork.** The relief icons, heraldic charges, map textures, markers and heightmap templates ship in upstream's
  repository. Upstream names no separate source or licence for them, so they come under the repository's licence
  as upstream presents it. We did not trace each one.
- **Fonts.** None are bundled. They come from Google Fonts at runtime.
- **Names.** "Azgaar's Fantasy Map Generator" is Azgaar's project name, kept as upstream uses it. This copy is not
  made or endorsed by Azgaar.

## Verification

On 2026-10-23, on macOS (arm64), from this branch:

- `npm ci` with Node 24.22.1 and npm 11.19.1, with the three variables above: 471 packages installed.
- `node scripts/tofu-build-site.mjs`: the type check passes and the Vite build succeeds. It reports 53 package
  licences and 413 files in the service worker's list, and `site/` holds 414 files (32,020,573 bytes). The built
  `index.html` contains no `googletagmanager`, `gtag` or `dataLayer`.
- Built again after step 2 above: all 414 files have the same SHA-256 as before.
- Every file in `site/` checked against Tofu's static path rules: 0 problems.
- A copy of `site/` without the paths Tofu's import drops, served with
  `python3 -I -m http.server 63783 --bind 127.0.0.1`: `/` answered 200 (34,371 bytes), and so did `/LICENSE.txt`,
  `/sw.js` and `/manifest.webmanifest`.
- In a browser tab on `http://127.0.0.1:63783/`: the first map generated about one second after load
  (seed 865482986, 4,559 cells, 11 states, 450 towns). F2 generated a new map (seed 386967235, 4,485 cells,
  15 states, 649 towns), with labels, borders and the upstream "what's new" dialog showing. There were no console
  errors and no failed requests. The only other host requested was `fonts.gstatic.com`. Google Analytics did not
  load. No service worker registered, because 127.0.0.1 counts as local. The server was stopped afterwards.
