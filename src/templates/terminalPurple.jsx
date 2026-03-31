import terminalBase from "./terminalBase";

const colors = {
  bg: "#12091a",
  titleBar: "#1a0d23",
  border: "#2e1a4a",
  accent: "#b266ff",
  prompt: "#8c4dcc",
  text: "#d4b8e6",
  dimText: "#6a4a8c",
};

export default function terminalPurple(cardData) {
  return terminalBase(cardData, colors);
}
