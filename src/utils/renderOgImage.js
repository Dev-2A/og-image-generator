import satori from "satori";
import { loadFont } from "./loadFont";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

export async function renderOgImage(template, cardData) {
  const fontData = await loadFont();

  // 템플릿 함수부터 Satori용 JSX 엘리먼트 생성
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
