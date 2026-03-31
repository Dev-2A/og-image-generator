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
      {/* 배경 장식 원 (좌상단) */}
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

      {/* 배경 장식 원 (우하단) */}
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

      {/* 이모지 */}
      <div style={{ fontSize: "64px", marginBottom: "16px", display: "flex" }}>
        {cardData.emoji}
      </div>

      {/* 프로젝트 이름 */}
      <div
        style={{
          fontSize: "52px",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "12px",
          textAlign: "center",
          display: "flex",
          textShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        {cardData.title || "Project Name"}
      </div>

      {/* 설명 */}
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
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: "9999px",
              fontSize: "16px",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              backdropFilter: "blur(4px)",
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
          color: "rgba(255,255,255,0.5)",
          display: cardData.author ? "flex" : "none",
        }}
      >
        {cardData.author ? `by ${cardData.author}` : ""}
      </div>
    </div>
  );
}
