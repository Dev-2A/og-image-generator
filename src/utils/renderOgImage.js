import satori from "satori";
import { loadFont } from "./loadFont";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

export async function renderOgImage(template, cardData) {
  const fontData = await loadFont();

  const element = template(cardData);

  const svg = await satori(element, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: [
      {
        name: "Noto Sans KR",
        data: fontData,
        weight: 400,
        style: "normal",
      },
      {
        name: "Noto Sans KR",
        data: fontData,
        weight: 700,
        style: "normal",
      },
    ],
  });

  return svg;
}

export async function svgToPng(svgString) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = OG_WIDTH;
      canvas.height = OG_HEIGHT;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, OG_WIDTH, OG_HEIGHT);

      canvas.toBlob((pngBlob) => {
        URL.revokeObjectURL(url);
        if (pngBlob) {
          resolve(pngBlob);
        } else {
          reject(new Error("PNG 변환 실패"));
        }
      }, "image/png");
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("SVG 이미지 로딩 실패"));
    };

    img.src = url;
  });
}

export function downloadPng(blob, filename = "og-image.png") {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
