import useSatoriRenderer from "../../hooks/useSatoriRenderer";

export default function PreviewPanel({ cardData }) {
  const { svgString, isRendering } = useSatoriRenderer(cardData);
  const hasData = cardData.title || cardData.description;

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
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 text-white text-sm font-medium rounded-lg transition-colors"
          disabled={!svgString}
        >
          📥 PNG 다운로드
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

      {/* 하단 정보 */}
      <div className="mt-4 p-3 bg-slate-900 rounded-lg flex items-center justify-between">
        <p className="text-xs text-slate-500">
          📐 현재 템플릿:{" "}
          <span className="text-slate-300">{cardData.template}</span>
        </p>
        <p className="text-xs text-slate-600">1200 × 630px · PNG</p>
      </div>
    </div>
  );
}
