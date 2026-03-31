import { getTechIcon } from "../data/techIcons";

export default function card(cardData) {
  const techStack = cardData.techStack || [];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a2e",
        fontFamily: "Noto Sans KR",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1000px",
          backgroundColor: "#16213e",
          borderRadius: "24px",
          border: "1px solid #0f3460",
          padding: "48px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              backgroundColor: "#0f3460",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              flexShrink: 0,
            }}
          >
            {cardData.emoji}
          </div>
          <div
            style={{
              fontSize: "42px",
              fontWeight: 700,
              color: "#e2e8f0",
              display: "flex",
            }}
          >
            {cardData.title || "Project Name"}
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#0f3460",
            marginBottom: "20px",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: "22px",
            color: "#94a3b8",
            marginBottom: "28px",
            lineHeight: 1.5,
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
          }}
        >
          {techStack.map((tech, i) => {
            const icon = getTechIcon(tech);
            return (
              <div
                key={i}
                style={{
                  padding: "8px 18px",
                  backgroundColor: icon.bg,
                  borderRadius: "8px",
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
            bottom: "24px",
            right: "32px",
            fontSize: "14px",
            color: "#475569",
            display: cardData.author ? "flex" : "none",
          }}
        >
          {cardData.author ? `by ${cardData.author}` : ""}
        </div>

        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "200px",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #53c2e8)",
            display: "flex",
          }}
        />
      </div>
    </div>
  );
}
