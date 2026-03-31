import minimal from "./minimal";
import gradient from "./gradient";
import card from "./card";
import terminalGreen from "./terminalGreen";
import terminalAmber from "./terminalAmber";
import terminalBlue from "./terminalBlue";
import terminalPink from "./terminalPink";
import terminalPurple from "./terminalPurple";

const templates = {
  minimal,
  gradient,
  card,
  "terminal-green": terminalGreen,
  "terminal-amber": terminalAmber,
  "terminal-blue": terminalBlue,
  "terminal-pink": terminalPink,
  "terminal-purple": terminalPurple,
};

export function getTemplate(id) {
  return templates[id] || minimal;
}

export default templates;
