export default function InputPanel() {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h2 className="text-lg font-semibold text-white mb-4">
        📝 프로젝트 정보
      </h2>

      <div className="space-y-4">
        {/* 프로젝트 이름 */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            프로젝트 이름
          </label>
          <input
            type="text"
            placeholder="예: OG Image Generator"
            className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 설명 */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            한 줄 설명
          </label>
          <input
            type="text"
            placeholder="예: 프로젝트 OG 카드 이미지 자동 생성기"
            className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 기술 스택 */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            기술 스택 (쉼표로 구분)
          </label>
          <input
            type="text"
            placeholder="예: React, Vite, Satori, Tailwind CSS"
            className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 이모지 */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            대표 이모지
          </label>
          <input
            type="text"
            placeholder="예: 🖼️"
            maxLength={4}
            className="w-20 px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-center text-xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* 템플릿 선택 (플레이스홀더) */}
      <div className="mt-6 pt-6 border-t border-slate-700">
        <h3 className="text-sm font-medium text-slate-300 mb-3">🎨 템플릿</h3>
        <div className="grid grid-cols-4 gap-2">
          {["Minimal", "Gradient", "Card", "Terminal"].map((name) => (
            <button
              key={name}
              className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs text-slate-300 transition-colors border border-transparent hover:border-slate-500"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
