import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import FourthPage from "./Components/FourthPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/signup" element={<SecondPage />} />
        <Route path="/welcome" element={<ThirdPage />} />
        <Route path="/quiz" element={<FourthPage />} />
      </Routes>
    </Router>
  );
}
