export function getPublicAssetPath(src: string) {
  return src.startsWith("/") ? src : `/${src}`;
}
