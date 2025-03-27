import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NavbarPage from "./pages/NavbarPage";
import HeroPage from "./pages/HeroPage";
import AnimationsPage from "./pages/AnimationsPage";
import WebsitesPage from "./pages/WebsitesPage";
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<NavbarPage />} />
            <Route path="/hero" element={<HeroPage />} />
            <Route path="/animations" element={<AnimationsPage />} />
            <Route path="/websites" element={<WebsitesPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
