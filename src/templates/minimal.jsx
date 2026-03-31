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
      {/* 이모지 */}
      <div style={{ fontSize: "72px", marginBottom: "20px", display: "flex" }}>
        {cardData.emoji}
      </div>

      {/* 프로젝트 이름 */}
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

      {/* 설명 */}
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

      {/* 기술 스택 뱃지 */}
      <div
        style={{
          display: techStack.length > 0 ? "flex" : "none",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {techStack.map((tech, i) => (
          <div
            key={i}
            style={{
              padding: "6px 16px",
              backgroundColor: "#1e293b",
              borderRadius: "9999px",
              fontSize: "16px",
              color: "#cbd5e1",
              border: "1px solid #334155",
              display: "flex",
            }}
          >
            {tech}
          </div>
        ))}
      </div>

      {/* 작성자 */}
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
