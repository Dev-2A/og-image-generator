import minimal from "./minimal";

// 템플릿 레지스트리 — 나중에 여기에 추가만 하면 됨
const templates = {
  minimal,
  // Step 7, 8에서 추가 예정:
  // gradient,
  // card,
  // 'terminal-green': terminalGreen,
  // 'terminal-amber': terminalAmber,
  // 'terminal-blue': terminalBlue,
  // 'terminal-pink': terminalPink,
  // 'terminal-purple': terminalPurple,
};

export function getTemplate(id) {
  return templates[id] || minimal;
}

export default templates;
