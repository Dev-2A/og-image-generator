import minimal from "./minimal";
import gradient from "./gradient";
import card from "./card";

const templates = {
  minimal,
  gradient,
  card,
  // Step 8에서 추가 예정:
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
