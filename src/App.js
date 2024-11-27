import { EmotionProvider } from "./contexts/EmotionContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <EmotionProvider>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </EmotionProvider>
  );
};

export default App;
