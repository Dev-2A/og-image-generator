# 🖼️ OG Image Generator

프로젝트 이름, 설명, 기술 스택을 입력하면 SNS 공유용 OG(Open Graph) 카드 이미지를 자동 생성하는 도구입니다.

> 토이 프로젝트 README에 넣을 썸네일을 직접 찍어내는 실용 도구

🔗 **Live Demo**: [https://dev-2a.github.io/og-image-generator/](https://dev-2a.github.io/og-image-generator/)

## ✨ 주요 기능

- 프로젝트 정보 입력 → OG 이미지 **실시간 프리뷰**
- **8종 템플릿** - 기본 3종 (Minimal, Gradient, Card) + Terminal Portfolio 테마 5종
- **50+종 기술 스택** 자동 색상 매칭
- **PNG 다운로드** (1200x630px, Facebook/Twitter 호환)
- 라이트/다크 모드 지원
- 반응형 레이아웃 (모바일 대응)
- 백엔드 없이 브라우저만으로 동작

## 🎨 템플릿

### 기본 템플릿

| Minimal | Gradient | Card |
| --- | --- | --- |
| 다크 배경 + 중앙 정렬 | 보라~남색 그라데이션 | 카드 UI + 액센트 라인 |

### Terminal 테마 (Terminal Portfolio 연동)

| Green | Amber | Blue | Pink | Purple |
| --- | --- | --- | --- | --- |
| 💚 매트릭스 | 🧡 레트로 | 💙 차가운 | 💖 핑크 | 💜 보라 |

## 🛠️ 기술 스택

- **React** + **Vite** — 빠른 개발 환경
- **Satori** — Vercel의 HTML/CSS → SVG 변환 엔진
- **Tailwind CSS v3** — 유틸리티 기반 스타일링
- **Canvas API** — SVG → PNG 변환
- **GitHub Pages** — 정적 사이트 배포

## 🚀 시작하기

### 설치

```bash
gti clone https://github.com/Dev-2A/og-image-generator.git
cd og-image-generator
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드 & 배포

```bash
npm run build
npm run deploy
```

## 📁 프로젝트 구조

```text
og-image-generator/
├── src/
│   ├── components/
│   │   ├── layout/         # Header
│   │   ├── form/           # InputPanel, TemplateSelector
│   │   ├── preview/        # PreviewPanel
│   │   └── ui/             # 공통 UI
│   ├── templates/          # OG 카드 템플릿 8종
│   │   ├── minimal.jsx
│   │   ├── gradient.jsx
│   │   ├── card.jsx
│   │   ├── terminalBase.jsx
│   │   ├── terminalGreen.jsx
│   │   ├── terminalAmber.jsx
│   │   ├── terminalBlue.jsx
│   │   ├── terminalPink.jsx
│   │   └── terminalPurple.jsx
│   ├── data/               # 기술 스택 아이콘, 템플릿 목록
│   ├── hooks/              # useCardData, useSatoriRenderer, useTheme
│   ├── contexts/           # ThemeContext
│   ├── utils/              # Satori 렌더링, PNG 변환, 폰트 로딩
│   └── assets/fonts/       # Noto Sans KR (Static)
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 💡 사용법

1. **프로젝트 이름** 입력 (필수)
2. **한 줄 설명** 입력
3. **기술 스택** 쉼표로 구분하여 입력 (자동 색상 매칭)
4. **대표 이모지** 선택
5. **템플릿** 선택 (8종)
6. **📥 PNG 다운로드** 클릭

다운로드한 이미지를 GitHub README에 바로 사용할 수 있습니다:

```markdown
![OG Image](./og-image.png)
```

## 🔗 관련 프로젝트

- [Terminal Portfolio](https://github.com/Dev-2A/terminal-portfolio) — 터미널 스타일 포트폴리오 (테마 원본)
- [dev-2a.github.io](https://dev-2a.github.io) — 포트폴리오 메인 페이지

## 📄 License

MIT License · [Dev-2A](https://github.com/Dev-2A)
