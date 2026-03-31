import terminalBase from "./terminalBase";

const colors = {
  bg: "#0a1612",
  titleBar: "#0d1f18",
  border: "#1a3a2a",
  accent: "#00ff41",
  prompt: "#00cc33",
  text: "#b8e6c8",
  dimText: "#4a8c5c",
};

export default function terminalGreen(cardData) {
  return terminalBase(cardData, colors);
}
