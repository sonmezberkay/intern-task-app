import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar />
      <ThemeSelector />
      <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
