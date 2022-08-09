import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contactus, OurTeam, Services, MapSection } from "./Pages";
import Error from "./Pages/Error";
import "./App.css";

const Router = () => {
  return (
    <BrowserRouter>
      <div className=" bg-white dark:bg-primary-dark transition duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/mapSection" element={<MapSection />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
