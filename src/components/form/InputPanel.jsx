import TemplateSelector from "./TemplateSelector";

export default function InputPanel({
  cardData,
  updateField,
  updateTechStack,
  resetData,
}) {
  return (
    <div className="space-y-6">
      {/* 입력 폼 카드 */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">📝 프로젝트 정보</h2>
          <button
            onClick={resetData}
            className="text-xs text-slate-400 hover:text-red-400 transition-colors"
          >
            🔄 초기화
          </button>
        </div>

        <div className="space-y-4">
          {/* 프로젝트 이름 */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              프로젝트 이름 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={cardData.title}
              onChange={(e) => updateField("title", e.target.value)}
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
              value={cardData.description}
              onChange={(e) => updateField("description", e.target.value)}
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
              onChange={(e) => updateTechStack(e.target.value)}
              placeholder="예: React, Vite, Satori, Tailwind CSS"
              className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {cardData.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
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
          </div>

          {/* 이모지 + 작성자 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                대표 이모지
              </label>
              <input
                type="text"
                value={cardData.emoji}
                onChange={(e) => updateField("emoji", e.target.value)}
                placeholder="🚀"
                maxLength={4}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-center text-xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                작성자
              </label>
              <input
                type="text"
                value={cardData.author}
                onChange={(e) => updateField("author", e.target.value)}
                placeholder="Dev-2A"
                className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* 템플릿 선택 */}
        <TemplateSelector selected={cardData.template} onSelect={updateField} />
      </div>
    </div>
  );
}
