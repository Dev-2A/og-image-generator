import terminalBase from "./terminalBase";

const colors = {
  bg: "#0a0f1e",
  titleBar: "#0d1529",
  border: "#1a2a4a",
  accent: "#00aaff",
  prompt: "#0088cc",
  text: "#b8d4e6",
  dimText: "#4a6a8c",
};

export default function terminalBlue(cardData) {
  return terminalBase(cardData, colors);
}
