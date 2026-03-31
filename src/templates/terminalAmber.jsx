import terminalBase from "./terminalBase";

const colors = {
  bg: "#1a1000",
  titleBar: "#231700",
  border: "#3d2a00",
  accent: "#ffb000",
  prompt: "#cc8c00",
  text: "#e6d5a8",
  dimText: "#8c7a4a",
};

export default function terminalAmber(cardData) {
  return terminalBase(cardData, colors);
}
