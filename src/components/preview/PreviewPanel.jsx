import { useState } from "react";
import useSatoriRenderer from "../../hooks/useSatoriRenderer";
import { svgToPng, downloadPng } from "../../utils/renderOgImage";

export default function PreviewPanel({ cardData }) {
  const { svgString, isRendering } = useSatoriRenderer(cardData);
  const [isDownloading, setIsDownloading] = useState(false);

  const hasData = cardData.title || cardData.description;

  const handleDownload = async () => {
    if (!svgString) return;

    setIsDownloading(true);
    try {
      const pngBlob = await svgToPng(svgString);
      const filename = cardData.title
        ? `${cardData.title.replace(/[^a-zA-Z0-9가-힣]/g, "_")}_og.png`
        : "og-image.png";
      downloadPng(pngBlob, filename);
    } catch (err) {
      console.error("다운로드 실패:", err);
      alert("PNG 다운로드에 실패했습니다.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">
          👁️ 미리보기
          {isRendering && (
            <span className="ml-2 text-xs text-blue-400 animate-pulse">
              렌더링 중...
            </span>
          )}
        </h2>
        <button
          onClick={handleDownload}
          disabled={!svgString || isDownloading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {isDownloading ? "⏳ 변환 중..." : "📥 PNG 다운로드"}
        </button>
      </div>

      {/* OG 이미지 프리뷰 영역 */}
      <div className="w-full aspect-[1200/630] bg-slate-900 rounded-lg border-2 border-dashed border-slate-600 overflow-hidden">
        {svgString ? (
          <div
            className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
            dangerouslySetInnerHTML={{ __html: svgString }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-slate-500">
              <p className="text-4xl mb-2">🖼️</p>
              <p className="text-sm">프로젝트 정보를 입력하면</p>
              <p className="text-sm">여기에 OG 카드가 표시됩니다</p>
              <p className="text-xs mt-2 text-slate-600">1200 × 630px</p>
            </div>
          </div>
        )}
      </div>

      {/* 이미지 크기 + 파일명 미리보기 */}
      <div className="mt-4 p-3 bg-slate-900 rounded-lg flex items-center justify-between">
        <p className="text-xs text-slate-500">
          📐 현재 템플릿:{" "}
          <span className="text-slate-300">{cardData.template}</span>
        </p>
        <p className="text-xs text-slate-600">
          {hasData && cardData.title
            ? `${cardData.title.replace(/[^a-zA-Z0-9가-힣]/g, "_")}_og.png`
            : "og-image.png"}
          {" · "}1200 × 630px
        </p>
      </div>
    </div>
  );
}
