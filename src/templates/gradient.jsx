import { getTechIcon } from "../data/techIcons";

export default function gradient(cardData) {
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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "Noto Sans KR",
        padding: "60px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          display: "flex",
        }}
      />

      <div style={{ fontSize: "64px", marginBottom: "16px", display: "flex" }}>
        {cardData.emoji}
      </div>

      <div
        style={{
          fontSize: "52px",
          fontWeight: 700,
          color: "#ffffff",
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
          color: "rgba(255,255,255,0.8)",
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
                backgroundColor: `${icon.bg}cc`,
                borderRadius: "9999px",
                fontSize: "16px",
                color: icon.color,
                border: `1px solid ${icon.color}44`,
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
          color: "rgba(255,255,255,0.5)",
          display: cardData.author ? "flex" : "none",
        }}
      >
        {cardData.author ? `by ${cardData.author}` : ""}
      </div>
    </div>
  );
}
