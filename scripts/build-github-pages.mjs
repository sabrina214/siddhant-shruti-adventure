import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const base = normalizeBase(
  process.env.GITHUB_PAGES_BASE ?? "/siddhant-shruti-adventure/",
);
const outDir = join(root, "gh-pages");
const rootPrefix = base === "/" ? "" : base.replace(/\/$/, "");

function normalizeBase(value) {
  if (!value || value === "/") {
    return "/";
  }
  return value.endsWith("/") ? value : `${value}/`;
}

function prefixUnprefixedRootPaths(content) {
  if (base === "/") {
    return content;
  }

  const escapedPrefix = rootPrefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const skip = `(?!${escapedPrefix.slice(1)}/|/)`;

  return content
    .replace(
      new RegExp(`(\\s(?:href|src|content)=["'])\\/${skip}`, "g"),
      `$1${rootPrefix}/`,
    )
    .replace(new RegExp(`import\\("\\/${skip}`, "g"), `import("${rootPrefix}/`)
    .replace(new RegExp(`:HL\\["\\/${skip}`, "g"), `:HL["${rootPrefix}/`)
    .replace(new RegExp(`url\\(\\/${skip}`, "g"), `url(${rootPrefix}/`);
}

execFileSync(
  "bash",
  [
    "scripts/sites-env.sh",
    "--",
    "./node_modules/.bin/vinext",
    "build",
    "--prerender-all",
  ],
  {
    cwd: root,
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_PAGES_BASE: base,
    },
  },
);

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(join(root, "dist/client"), outDir, { recursive: true });

const indexHtml = await readFile(
  join(root, "dist/server/prerendered-routes/index.html"),
  "utf8",
);
const html = prefixUnprefixedRootPaths(indexHtml);

await writeFile(join(outDir, "index.html"), html);
await writeFile(join(outDir, "404.html"), html);
await writeFile(join(outDir, ".nojekyll"), "\n");

console.log(`GitHub Pages bundle ready in gh-pages/ (base: ${base})`);
