export default function Header() {
  return (
    <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🖼️</span>
          <div>
            <h1 className="text-xl font-bold text-white">OG Image Generator</h1>
            <p className="text-xs text-slate-400">
              프로젝트 OG 카드 이미지 자동 생성기
            </p>
          </div>
        </div>
        <a
          href="https://github.com/Dev-2A/og-image-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors text-sm"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
