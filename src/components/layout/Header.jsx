import useTheme from "../../hooks/useTheme";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🖼️</span>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              OG Image Generator
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              프로젝트 OG 카드 이미지 자동 생성기
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* 테마 토글 */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* GitHub 링크 */}
          <a
            href="https://github.com/Dev-2A/og-image-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}
