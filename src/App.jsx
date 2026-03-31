import Header from "./components/layout/Header";
import InputPanel from "./components/form/InputPanel";
import PreviewPanel from "./components/preview/PreviewPanel";
import useCardData from "./hooks/useCardData";

function App() {
  const { cardData, updateField, updateTechStack, resetData } = useCardData();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200 transition-colors">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <InputPanel
            cardData={cardData}
            updateField={updateField}
            updateTechStack={updateTechStack}
            resetData={resetData}
          />
          <PreviewPanel cardData={cardData} />
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 py-6">
        <p className="text-center text-xs text-slate-400 dark:text-slate-500">
          Built with React + Satori · Made by Dev-2A
        </p>
      </footer>
    </div>
  );
}

export default App;
