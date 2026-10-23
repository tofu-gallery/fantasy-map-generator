/**
 * The Tofu gallery's build (see TOFU.md): upstream's own `vite.config.ts`, with three differences.
 * - The site is served from the root of its own address, so `base` is "/", as in upstream's Netlify and Docker builds.
 * - It is written to `site/`, which is committed: Tofu's static hosting serves a finished site and does not run this build.
 * - Google Analytics is left out of `index.html`: the gallery copy carries no tracking. The two patterns are the ones
 *   upstream's own desktop build strips (`stripWebOnlyTags` in `vite.config.ts`); the web app manifest stays.
 * Run it through `node scripts/tofu-build-site.mjs`, which also type-checks, copies the licences and fills the
 * service worker's precache list, as `npm run build` does for `dist/`.
 */
import upstream from "./vite.config";

const stripAnalytics = {
  name: "tofu-strip-analytics",
  transformIndexHtml: (html: string) =>
    html
      .replace(/<script async src="https:\/\/www\.googletagmanager\.com[^>]*><\/script>\s*/, "")
      .replace(/<script>\s*window\.dataLayer[\s\S]*?<\/script>\s*/, "")
};

export default ({ mode }: { mode: string }) => {
  const config = upstream({ mode });
  return {
    ...config,
    base: "/",
    plugins: [...config.plugins, stripAnalytics],
    build: { ...config.build, outDir: "../site" }
  };
};
