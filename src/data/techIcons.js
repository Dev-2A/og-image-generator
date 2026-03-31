// 기술 스택별 색상 + 약어 매핑
// 키는 소문자로 매칭 (입력값을 toLowerCase()로 비교)

const techIcons = {
  // Frontend
  react: { color: "#61dafb", bg: "#20232a", label: "React" },
  vue: { color: "#42b883", bg: "#1a1a2e", label: "Vue" },
  "vue.js": { color: "#42b883", bg: "#1a1a2e", label: "Vue" },
  nextjs: { color: "#ffffff", bg: "#000000", label: "Next.js" },
  "next.js": { color: "#ffffff", bg: "#000000", label: "Next.js" },
  vite: { color: "#bd34fe", bg: "#1a1a2e", label: "Vite" },
  svelte: { color: "#ff3e00", bg: "#1a1a2e", label: "Svelte" },

  // Styling
  tailwind: { color: "#38bdf8", bg: "#0f172a", label: "Tailwind" },
  "tailwind css": { color: "#38bdf8", bg: "#0f172a", label: "Tailwind" },
  tailwindcss: { color: "#38bdf8", bg: "#0f172a", label: "Tailwind" },
  css: { color: "#264de4", bg: "#1a1a2e", label: "CSS" },

  // Languages
  javascript: { color: "#f7df1e", bg: "#323330", label: "JS" },
  js: { color: "#f7df1e", bg: "#323330", label: "JS" },
  typescript: { color: "#3178c6", bg: "#1a1a2e", label: "TS" },
  ts: { color: "#3178c6", bg: "#1a1a2e", label: "TS" },
  python: { color: "#3776ab", bg: "#1a1a2e", label: "Python" },
  java: { color: "#ed8b00", bg: "#1a1a2e", label: "Java" },
  rust: { color: "#dea584", bg: "#1a1a2e", label: "Rust" },

  // Backend / Runtime
  "node.js": { color: "#339933", bg: "#1a1a2e", label: "Node.js" },
  nodejs: { color: "#339933", bg: "#1a1a2e", label: "Node.js" },
  node: { color: "#339933", bg: "#1a1a2e", label: "Node.js" },
  fastapi: { color: "#009688", bg: "#1a1a2e", label: "FastAPI" },
  django: { color: "#092e20", bg: "#44b78b", label: "Django" },
  flask: { color: "#ffffff", bg: "#1a1a2e", label: "Flask" },
  express: { color: "#ffffff", bg: "#1a1a2e", label: "Express" },

  // Database
  sqlite: { color: "#003b57", bg: "#57a5d8", label: "SQLite" },
  postgresql: { color: "#336791", bg: "#1a1a2e", label: "PostgreSQL" },
  postgres: { color: "#336791", bg: "#1a1a2e", label: "PostgreSQL" },
  mysql: { color: "#4479a1", bg: "#1a1a2e", label: "MySQL" },
  mongodb: { color: "#47a248", bg: "#1a1a2e", label: "MongoDB" },
  elasticsearch: { color: "#fed10a", bg: "#1a1a2e", label: "ES" },
  es: { color: "#fed10a", bg: "#1a1a2e", label: "ES" },
  redis: { color: "#dc382d", bg: "#1a1a2e", label: "Redis" },
  supabase: { color: "#3fcf8e", bg: "#1a1a2e", label: "Supabase" },

  // DevOps / Tools
  docker: { color: "#2496ed", bg: "#1a1a2e", label: "Docker" },
  git: { color: "#f05032", bg: "#1a1a2e", label: "Git" },
  github: { color: "#ffffff", bg: "#24292e", label: "GitHub" },
  "github actions": { color: "#2088ff", bg: "#1a1a2e", label: "Actions" },
  "github pages": { color: "#222222", bg: "#ffffff", label: "GH Pages" },
  linux: { color: "#fcc624", bg: "#1a1a2e", label: "Linux" },
  nginx: { color: "#009639", bg: "#1a1a2e", label: "Nginx" },

  // AI / ML
  pytorch: { color: "#ee4c2c", bg: "#1a1a2e", label: "PyTorch" },
  torch: { color: "#ee4c2c", bg: "#1a1a2e", label: "PyTorch" },
  openai: { color: "#412991", bg: "#1a1a2e", label: "OpenAI" },
  anthropic: { color: "#d4a27f", bg: "#1a1a2e", label: "Anthropic" },
  "bge-m3": { color: "#ff6b35", bg: "#1a1a2e", label: "BGE-M3" },
  faiss: { color: "#3b5998", bg: "#1a1a2e", label: "FAISS" },

  // Data Viz / Libraries
  "d3.js": { color: "#f9a03c", bg: "#1a1a2e", label: "D3.js" },
  d3: { color: "#f9a03c", bg: "#1a1a2e", label: "D3.js" },
  recharts: { color: "#22b5bf", bg: "#1a1a2e", label: "Recharts" },
  reactflow: { color: "#ff0072", bg: "#1a1a2e", label: "ReactFlow" },
  "js-yaml": { color: "#cb171e", bg: "#1a1a2e", label: "js-yaml" },

  // Misc
  satori: { color: "#ffffff", bg: "#000000", label: "Satori" },
  "discord.py": { color: "#5865f2", bg: "#1a1a2e", label: "discord.py" },
  discord: { color: "#5865f2", bg: "#1a1a2e", label: "Discord" },
  notion: { color: "#ffffff", bg: "#1a1a2e", label: "Notion" },
  "notion api": { color: "#ffffff", bg: "#1a1a2e", label: "Notion API" },
  zustand: { color: "#614a28", bg: "#f5d999", label: "Zustand" },
};

// 매칭되지 않는 기술은 기본 색상 반환
const defaultIcon = { color: "#94a3b8", bg: "#1e293b", label: null };

export function getTechIcon(techName) {
  const key = techName.toLowerCase().trim();
  const match = techIcons[key];
  return match ? { ...match } : { ...defaultIcon, label: techName };
}

export default techIcons;
