// 터미널 스타일 OG 카드 — 공통 베이스
// 각 테마는 colors 객체만 바꿔서 호출

export default function terminalBase(cardData, colors) {
  const techStack = cardData.techStack || [];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.bg,
        fontFamily: "Noto Sans KR",
        padding: "0",
        position: "relative",
      }}
    >
      {/* 타이틀 바 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "48px",
          backgroundColor: colors.titleBar,
          padding: "0 20px",
          gap: "10px",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        {/* 윈도우 버튼 */}
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#ff5f57",
              display: "flex",
            }}
          />
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#febc2e",
              display: "flex",
            }}
          />
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#28c840",
              display: "flex",
            }}
          />
        </div>

        {/* 타이틀 */}
        <div
          style={{
            fontSize: "14px",
            color: colors.dimText,
            marginLeft: "12px",
            display: "flex",
          }}
        >
          dev-2a@portfolio:~
        </div>
      </div>

      {/* 터미널 본문 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "32px 40px",
          gap: "8px",
        }}
      >
        {/* $ cat project.md */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            fontSize: "16px",
            marginBottom: "16px",
          }}
        >
          <div style={{ color: colors.prompt, display: "flex" }}>$</div>
          <div style={{ color: colors.dimText, display: "flex" }}>
            cat project.md
          </div>
        </div>

        {/* 이모지 + 프로젝트 이름 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "4px",
          }}
        >
          <div style={{ fontSize: "48px", display: "flex" }}>
            {cardData.emoji}
          </div>
          <div
            style={{
              fontSize: "44px",
              fontWeight: 700,
              color: colors.accent,
              display: "flex",
            }}
          >
            {cardData.title || "Project Name"}
          </div>
        </div>

        {/* 구분선 */}
        <div
          style={{
            display: "flex",
            fontSize: "16px",
            color: colors.border,
            marginBottom: "8px",
          }}
        >
          {"─".repeat(60)}
        </div>

        {/* 설명 */}
        <div
          style={{
            fontSize: "22px",
            color: colors.text,
            marginBottom: "20px",
            display: cardData.description ? "flex" : "none",
          }}
        >
          {cardData.description || ""}
        </div>

        {/* 기술 스택 — 터미널 스타일 */}
        <div
          style={{
            display: techStack.length > 0 ? "flex" : "none",
            gap: "8px",
            fontSize: "16px",
            marginBottom: "8px",
          }}
        >
          <div style={{ color: colors.prompt, display: "flex" }}>$</div>
          <div style={{ color: colors.dimText, display: "flex" }}>
            ls tech-stack/
          </div>
        </div>

        <div
          style={{
            display: techStack.length > 0 ? "flex" : "none",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {techStack.map((tech, i) => (
            <div
              key={i}
              style={{
                padding: "4px 14px",
                border: `1px solid ${colors.accent}`,
                borderRadius: "4px",
                fontSize: "15px",
                color: colors.accent,
                display: "flex",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* 하단 바 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 40px",
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{ fontSize: "14px", color: colors.dimText, display: "flex" }}
        >
          {cardData.author ? `by ${cardData.author}` : ""}
        </div>
        <div
          style={{ fontSize: "14px", color: colors.dimText, display: "flex" }}
        >
          github.com/Dev-2A
        </div>
      </div>
    </div>
  );
}
