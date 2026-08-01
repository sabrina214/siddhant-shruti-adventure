/** Resolve a public-folder path for the current deploy base (local `/`, GitHub Pages `/repo/`). */
export function assetUrl(path: string) {
  if (!path || /^https?:\/\//.test(path) || path.startsWith("//")) {
    return path;
  }

  const base = import.meta.env.BASE_URL ?? "/";
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
