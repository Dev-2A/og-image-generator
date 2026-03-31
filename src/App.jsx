import Header from "./components/layout/Header";
import InputPanel from "./components/form/InputPanel";
import PreviewPanel from "./components/preview/PreviewPanel";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 왼쪽: 입력 */}
          <InputPanel />
          {/* 오른쪽: 프리뷰 */}
          <PreviewPanel />
        </div>
      </main>
    </div>
  );
}

export default App;
