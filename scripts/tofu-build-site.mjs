#!/usr/bin/env node

/**
 * Build the finished site the Tofu gallery serves from `site/` (see TOFU.md).
 *
 * The same steps as `npm run build`, with `vite.tofu.config.ts` instead of `vite.config.ts`:
 * type check, Vite build into `site/`, then the service worker's precache list. Between the build and the
 * precache list it copies the licence (`site/LICENSE.txt`) and the licences of the npm packages bundled into
 * the JavaScript (`site/THIRD-PARTY-LICENSES.txt`), and it fails if `site/index.html` still loads Google Analytics.
 *
 * Usage (Node 24, from the repository root):
 *   npm ci && node scripts/tofu-build-site.mjs
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const site = path.join(root, "site");
const bin = name => path.join(root, "node_modules", ".bin", name);
const run = (command, args) => execFileSync(command, args, { cwd: root, stdio: "inherit" });
const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));

/** Every package reachable from package.json's `dependencies`; some (d3's command-line tools) never reach the bundle */
function runtimePackages() {
  const found = new Map();
  const visit = (name, from) => {
    const dir = [path.join(from, "node_modules", name), path.join(root, "node_modules", name)].find(candidate =>
      fs.existsSync(path.join(candidate, "package.json"))
    );
    if (!dir || found.has(dir)) return;
    const pkg = readJson(path.join(dir, "package.json"));
    found.set(dir, pkg);
    for (const dependency of Object.keys(pkg.dependencies ?? {})) visit(dependency, dir);
  };
  for (const dependency of Object.keys(readJson(path.join(root, "package.json")).dependencies ?? {})) visit(dependency, root);
  return [...found.entries()].sort(([, a], [, b]) => a.name.localeCompare(b.name) || a.version.localeCompare(b.version));
}

function writeThirdPartyLicenses() {
  const header = [
    "Licences of the npm packages bundled into this site's JavaScript: the `dependencies` of package.json and the",
    "packages they depend on. The libraries in libs/ carry their own notices at the top of each file.",
    "Fantasy Map Generator itself is under LICENSE.txt."
  ].join("\n");
  const entries = runtimePackages().map(([dir, pkg]) => {
    const file = fs.readdirSync(dir).find(name => /^(licen[cs]e|copying)(\.|-|$)/i.test(name));
    const text = file
      ? fs.readFileSync(path.join(dir, file), "utf8").trim()
      : `(The package ships no licence file; its package.json names the licence ${pkg.license ?? "nowhere"}.)`;
    return `${pkg.name}@${pkg.version} (${pkg.license ?? "licence not stated"})\n\n${text}`;
  });
  const separator = `\n\n${"-".repeat(72)}\n\n`;
  fs.writeFileSync(path.join(site, "THIRD-PARTY-LICENSES.txt"), `${header}${separator}${entries.join(separator)}\n`);
  console.log(`[tofu-build-site] ${entries.length} package licences written to site/THIRD-PARTY-LICENSES.txt`);
}

run(bin("tsc"), []);
run(bin("vite"), ["build", "--config", "vite.tofu.config.ts"]);
fs.copyFileSync(path.join(root, "LICENSE"), path.join(site, "LICENSE.txt"));
writeThirdPartyLicenses();
run(process.execPath, [path.join(root, "scripts", "pwa-precache.mjs"), site]);

const html = fs.readFileSync(path.join(site, "index.html"), "utf8");
if (/googletagmanager|gtag\(|dataLayer/.test(html)) {
  console.error("[tofu-build-site] site/index.html still loads Google Analytics: update vite.tofu.config.ts");
  process.exit(1);
}
console.log("[tofu-build-site] site/ is ready");
