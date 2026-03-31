// OG 카드 기본 데이터 모델
export const defaultCardData = {
  title: "",
  description: "",
  techStack: [],
  emoji: "🚀",
  template: "minimal",
  author: "Dev-2A",
};

// 사용 가능한 템플릿 목록
export const templateList = [
  { id: "minimal", name: "Minimal", icon: "⬜" },
  { id: "gradient", name: "Gradient", icon: "🌈" },
  { id: "card", name: "Card", icon: "🃏" },
  { id: "terminal-green", name: "Terminal Green", icon: "💚" },
  { id: "terminal-amber", name: "Terminal Amber", icon: "🧡" },
  { id: "terminal-blue", name: "Terminal Blue", icon: "💙" },
  { id: "terminal-pink", name: "Terminal Pink", icon: "💖" },
  { id: "terminal-purple", name: "Terminal Purple", icon: "💜" },
];
