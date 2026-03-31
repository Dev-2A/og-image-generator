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
    <div className="space-y-4">
      {/* 프리뷰 카드 */}
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

        {/* OG 이미지 프리뷰 */}
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
      </div>

      {/* 다운로드 정보 카드 */}
      <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-4 text-slate-400">
            <span>📐 1200 × 630px</span>
            <span>📦 PNG</span>
            <span>🎨 {cardData.template}</span>
          </div>
          <span className="text-slate-500">
            {hasData && cardData.title
              ? `${cardData.title.replace(/[^a-zA-Z0-9가-힣]/g, "_")}_og.png`
              : "og-image.png"}
          </span>
        </div>
      </div>

      {/* 사용 팁 */}
      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
        <p className="text-xs text-slate-500 mb-2">💡 사용 팁</p>
        <ul className="text-xs text-slate-400 space-y-1">
          <li>• 다운로드한 PNG를 GitHub README에 바로 사용할 수 있어요</li>
          <li>• OG 이미지 권장 크기는 1200×630px (Facebook, Twitter 호환)</li>
          <li>• 기술 스택은 등록된 50+종에 자동 색상이 매칭됩니다</li>
        </ul>
      </div>
    </div>
  );
}
