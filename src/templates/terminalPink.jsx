import terminalBase from "./terminalBase";

const colors = {
  bg: "#1a0a14",
  titleBar: "#230d1a",
  border: "#3d1a30",
  accent: "#ff69b4",
  prompt: "#cc5490",
  text: "#e6b8d4",
  dimText: "#8c4a6a",
};

export default function terminalPink(cardData) {
  return terminalBase(cardData, colors);
}
