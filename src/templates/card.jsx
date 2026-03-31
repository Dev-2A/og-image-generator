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
      {/* 카드 컨테이너 */}
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
        {/* 상단: 이모지 + 제목 영역 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "16px",
          }}
        >
          {/* 이모지 배경 */}
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

          {/* 제목 */}
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

        {/* 구분선 */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#0f3460",
            marginBottom: "20px",
            display: "flex",
          }}
        />

        {/* 설명 */}
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

        {/* 기술 스택 */}
        <div
          style={{
            display: techStack.length > 0 ? "flex" : "none",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {techStack.map((tech, i) => (
            <div
              key={i}
              style={{
                padding: "8px 18px",
                backgroundColor: "#0f3460",
                borderRadius: "8px",
                fontSize: "16px",
                color: "#53c2e8",
                display: "flex",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* 작성자 (카드 우하단) */}
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

        {/* 장식: 우상단 액센트 라인 */}
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
