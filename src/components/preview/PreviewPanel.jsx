export default function PreviewPanel({ cardData }) {
  const hasData = cardData.title || cardData.description;

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">👁️ 미리보기</h2>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 text-white text-sm font-medium rounded-lg transition-colors"
          disabled={!hasData}
        >
          📥 PNG 다운로드
        </button>
      </div>

      {/* OG 이미지 프리뷰 영역 */}
      <div className="w-full aspect-[1200/630] bg-slate-900 rounded-lg border-2 border-dashed border-slate-600 flex items-center justify-center overflow-hidden">
        {hasData ? (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 text-center">
            <span className="text-5xl mb-3">{cardData.emoji}</span>
            <h3 className="text-2xl font-bold text-white mb-2">
              {cardData.title}
            </h3>
            {cardData.description && (
              <p className="text-sm text-slate-400 mb-4">
                {cardData.description}
              </p>
            )}
            {cardData.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 justify-center">
                {cardData.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-slate-700 text-slate-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {cardData.author && (
              <p className="text-xs text-slate-500 mt-4">
                by {cardData.author}
              </p>
            )}
          </div>
        ) : (
          <div className="text-center text-slate-500">
            <p className="text-4xl mb-2">🖼️</p>
            <p className="text-sm">프로젝트 정보를 입력하면</p>
            <p className="text-sm">여기에 OG 카드가 표시됩니다</p>
            <p className="text-xs mt-2 text-slate-600">1200 × 630px</p>
          </div>
        )}
      </div>

      {/* 현재 선택된 템플릿 표시 */}
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
