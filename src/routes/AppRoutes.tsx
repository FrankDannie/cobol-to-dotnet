import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConversionFilePage from "../pages/folder/ConversionFilePage";
import ConversionCodePage from "../pages/code/ConversionCodePage";


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/code-conveter" element={<ConversionCodePage />} />
        <Route path="/" element={<ConversionFilePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
