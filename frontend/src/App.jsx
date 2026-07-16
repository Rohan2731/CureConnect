import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SymptomChecker from "./pages/SymptomChecker";
import MedicineRecommendation from "./pages/MedicineRecommendation";
import Chatbot from "./pages/Chatbot";
import PharmacyLocator from "./pages/PharmacyLocator";
import SkinDetection from "./pages/SkinDetection";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<SymptomChecker />} />
        <Route path="/medicine" element={<MedicineRecommendation />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/pharmacy" element={<PharmacyLocator />} />
        <Route path="/skin" element={<SkinDetection />} />
      </Routes>
    </>
  );
}

export default App;