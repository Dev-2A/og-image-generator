import { templateList } from "../../data/defaults";

export default function TemplateSelector({ selected, onSelect }) {
  const basicTemplates = templateList.filter((t) => t.group === "basic");
  const terminalTemplates = templateList.filter((t) => t.group === "terminal");

  return (
    <div className="mt-6 pt-6 border-t border-slate-700">
      {/* 기본 템플릿 */}
      <h3 className="text-sm font-medium text-slate-300 mb-3">
        🎨 기본 템플릿
      </h3>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {basicTemplates.map((tpl) => (
          <TemplateCard
            key={tpl.id}
            tpl={tpl}
            isSelected={selected === tpl.id}
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* 터미널 테마 */}
      <h3 className="text-sm font-medium text-slate-300 mb-3">
        💻 Terminal 테마
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {terminalTemplates.map((tpl) => (
          <TemplateCard
            key={tpl.id}
            tpl={tpl}
            isSelected={selected === tpl.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

function TemplateCard({ tpl, isSelected, onSelect }) {
  const isGradient = tpl.colors.bg.includes("gradient");

  return (
    <button
      onClick={() => onSelect("template", tpl.id)}
      className={`group relative rounded-lg overflow-hidden transition-all ${
        isSelected
          ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-800"
          : "hover:ring-1 hover:ring-slate-500"
      }`}
    >
      {/* 미니 프리뷰 */}
      <div
        className="aspect-[1200/630] flex flex-col items-center justify-center p-2"
        style={{
          background: isGradient ? tpl.colors.bg : undefined,
          backgroundColor: isGradient ? undefined : tpl.colors.bg,
        }}
      >
        {/* 미니 타이틀 바 (터미널만) */}
        {tpl.group === "terminal" && (
          <div
            className="absolute top-0 left-0 right-0 h-2 flex items-center gap-0.5 px-1"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <div className="w-1 h-1 rounded-full bg-red-500" />
            <div className="w-1 h-1 rounded-full bg-yellow-500" />
            <div className="w-1 h-1 rounded-full bg-green-500" />
          </div>
        )}

        {/* 미니 콘텐츠 라인 */}
        <div
          className="w-3/4 h-1.5 rounded-full mb-1"
          style={{ backgroundColor: tpl.colors.accent }}
        />
        <div
          className="w-1/2 h-1 rounded-full mb-1.5"
          style={{ backgroundColor: tpl.colors.sub }}
        />
        <div className="flex gap-0.5">
          <div
            className="w-4 h-1 rounded-full"
            style={{ backgroundColor: `${tpl.colors.accent}66` }}
          />
          <div
            className="w-4 h-1 rounded-full"
            style={{ backgroundColor: `${tpl.colors.accent}66` }}
          />
        </div>
      </div>

      {/* 라벨 */}
      <div
        className={`text-center py-1.5 text-xs ${
          isSelected ? "text-blue-400 font-medium" : "text-slate-400"
        }`}
      >
        {tpl.name}
      </div>
    </button>
  );
}
