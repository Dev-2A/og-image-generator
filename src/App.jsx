import Header from "./components/layout/Header";
import InputPanel from "./components/form/InputPanel";
import PreviewPanel from "./components/preview/PreviewPanel";
import useCardData from "./hooks/useCardData";

function App() {
  const { cardData, updateField, updateTechStack, resetData } = useCardData();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InputPanel
            cardData={cardData}
            updateField={updateField}
            updateTechStack={updateTechStack}
            resetData={resetData}
          />
          <PreviewPanel cardData={cardData} />
        </div>
      </main>
    </div>
  );
}

export default App;
