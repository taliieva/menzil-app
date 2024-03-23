import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardPage from "../pages/CardPage/page.tsx";
import SoilPage from "../pages/Soil/page.tsx";
import Agency from "../pages/Agency/page.tsx";
import Objects from "../pages/Objects/page.tsx";
import GaragePage from "../pages/Garage/page.tsx";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/Agentlik" element={<Agency />} />
        <Route path="/Torpaq" element={<SoilPage />} />
        <Route path="/Obyekt" element={<Objects />} />
        <Route path="/Qaraj" element={<GaragePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
