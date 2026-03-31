import { useState, useEffect, useRef } from "react";
import { renderOgImage } from "../utils/renderOgImage";
import { getTemplate } from "../templates";

export default function useSatoriRenderer(cardData) {
  const [svgString, setSvgString] = useState("");
  const [isRendering, setIsRendering] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    // 입력이 없으면 렌더링하지 않음
    if (!cardData.title && !cardData.description) {
      setSvgString("");
      return;
    }

    // 300ms 디바운스: 타이핑할 때마다 렌더링하면 느려지니까
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      setIsRendering(true);
      try {
        const template = getTemplate(cardData.template);
        const svg = await renderOgImage(template, cardData);
        setSvgString(svg);
      } catch (err) {
        console.error("Satori 렌더링 실패:", err);
      } finally {
        setIsRendering(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [cardData]);

  return { svgString, isRendering };
}
