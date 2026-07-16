import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SymptomChecker from "./pages/SymptomChecker";
import MedicineRecommendation from "./pages/MedicineRecommendation";
import Chatbot from "./pages/Chatbot";
import PharmacyLocator from "./pages/PharmacyLocator";
import SkinDetection from "./pages/SkinDetection";
import History from "./pages/History";
import About from "./pages/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<SymptomChecker />} />
        <Route path="/medicine" element={<MedicineRecommendation />} />
        <Route path="/pharmacy" element={<PharmacyLocator />} />
        <Route path="/skin" element={<SkinDetection />} />
        <Route path="/history" element={<History />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;