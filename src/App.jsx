import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Networks from "./pages/Networks";
import Virtualization from "./pages/Virtualization";
import Robotics from "./pages/Robotics";
import Hardware from "./pages/Hardware";
import AiAgents from "./pages/AiAgents";
import "./App.css";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programovanie" element={<Programming />} />
          <Route path="/siete" element={<Networks />} />
          <Route path="/virtualizacia" element={<Virtualization />} />
          <Route path="/robotika" element={<Robotics />} />
          <Route path="/hardver" element={<Hardware />} />
          <Route path="/ai-agenti" element={<AiAgents />} />
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
