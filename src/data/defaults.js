export const defaultCardData = {
  title: "",
  description: "",
  techStack: [],
  emoji: "🚀",
  template: "minimal",
  author: "Dev-2A",
};

// 템플릿 목록 — 썸네일 미리보기용 색상 추가
export const templateList = [
  {
    id: "minimal",
    name: "Minimal",
    icon: "⬜",
    group: "basic",
    colors: { bg: "#0f172a", accent: "#f1f5f9", sub: "#94a3b8" },
  },
  {
    id: "gradient",
    name: "Gradient",
    icon: "🌈",
    group: "basic",
    colors: {
      bg: "linear-gradient(135deg, #667eea, #764ba2)",
      accent: "#ffffff",
      sub: "rgba(255,255,255,0.7)",
    },
  },
  {
    id: "card",
    name: "Card",
    icon: "🃏",
    group: "basic",
    colors: { bg: "#1a1a2e", accent: "#53c2e8", sub: "#94a3b8" },
  },
  {
    id: "terminal-green",
    name: "Green",
    icon: "💚",
    group: "terminal",
    colors: { bg: "#0a1612", accent: "#00ff41", sub: "#4a8c5c" },
  },
  {
    id: "terminal-amber",
    name: "Amber",
    icon: "🧡",
    group: "terminal",
    colors: { bg: "#1a1000", accent: "#ffb000", sub: "#8c7a4a" },
  },
  {
    id: "terminal-blue",
    name: "Blue",
    icon: "💙",
    group: "terminal",
    colors: { bg: "#0a0f1e", accent: "#00aaff", sub: "#4a6a8c" },
  },
  {
    id: "terminal-pink",
    name: "Pink",
    icon: "💖",
    group: "terminal",
    colors: { bg: "#1a0a14", accent: "#ff69b4", sub: "#8c4a6a" },
  },
  {
    id: "terminal-purple",
    name: "Purple",
    icon: "💜",
    group: "terminal",
    colors: { bg: "#12091a", accent: "#b266ff", sub: "#6a4a8c" },
  },
];
