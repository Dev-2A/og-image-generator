import { getTechIcon } from "../data/techIcons";

export default function minimal(cardData) {
  const techStack = cardData.techStack || [];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
        fontFamily: "Noto Sans KR",
        padding: "60px",
        position: "relative",
      }}
    >
      <div style={{ fontSize: "72px", marginBottom: "20px", display: "flex" }}>
        {cardData.emoji}
      </div>

      <div
        style={{
          fontSize: "48px",
          fontWeight: 700,
          color: "#f1f5f9",
          marginBottom: "12px",
          textAlign: "center",
          display: "flex",
        }}
      >
        {cardData.title || "Project Name"}
      </div>

      <div
        style={{
          fontSize: "22px",
          color: "#94a3b8",
          marginBottom: "32px",
          textAlign: "center",
          display: cardData.description ? "flex" : "none",
        }}
      >
        {cardData.description || ""}
      </div>

      <div
        style={{
          display: techStack.length > 0 ? "flex" : "none",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {techStack.map((tech, i) => {
          const icon = getTechIcon(tech);
          return (
            <div
              key={i}
              style={{
                padding: "6px 16px",
                backgroundColor: icon.bg,
                borderRadius: "9999px",
                fontSize: "16px",
                color: icon.color,
                border: `1px solid ${icon.color}33`,
                display: "flex",
              }}
            >
              {icon.label}
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          right: "40px",
          fontSize: "16px",
          color: "#475569",
          display: cardData.author ? "flex" : "none",
        }}
      >
        {cardData.author ? `by ${cardData.author}` : ""}
      </div>
    </div>
  );
}
