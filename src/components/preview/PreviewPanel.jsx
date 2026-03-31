export default function PreviewPanel() {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">👁️ 미리보기</h2>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
          disabled
        >
          📥 PNG 다운로드
        </button>
      </div>

      {/* OG 이미지 프리뷰 영역 (1200x630 비율) */}
      <div className="w-full aspect-[1200/630] bg-slate-900 rounded-lg border-2 border-dashed border-slate-600 flex items-center justify-center">
        <div className="text-center text-slate-500">
          <p className="text-4xl mb-2">🖼️</p>
          <p className="text-sm">프로젝트 정보를 입력하면</p>
          <p className="text-sm">여기에 OG 카드가 표시됩니다</p>
          <p className="text-xs mt-2 text-slate-600">1200 × 630px</p>
        </div>
      </div>

      {/* 메타 태그 코드 (플레이스홀더) */}
      <div className="mt-4 p-3 bg-slate-900 rounded-lg">
        <p className="text-xs text-slate-500 mb-1">📋 메타 태그 코드</p>
        <code className="text-xs text-slate-400 font-mono">
          &lt;meta property="og:image" content="..." /&gt;
        </code>
      </div>
    </div>
  );
}
