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
        <Route path="/secondpage" element={<SecondPage />} />
        <Route path="/thirdpage" element={<ThirdPage />} />
        <Route path="/fourthpage" element={<FourthPage />} />
      </Routes>
    </Router>
  );
}
