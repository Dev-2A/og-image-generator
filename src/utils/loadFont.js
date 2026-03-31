let fontCache = null;

export async function loadFont() {
  if (fontCache) return fontCache;

  const response = await fetch(
    new URL("../assets/fonts/NotoSansKR-Regular.ttf", import.meta.url),
  );
  const fontData = await response.arrayBuffer();
  fontCache = fontData;

  return fontData;
}
