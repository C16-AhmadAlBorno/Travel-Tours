import { useState } from "react";
import { createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Language from "./components/Language";
import Slider from "./components/Slider";

export const travelContext = createContext();
function App() {
  return (
    <travelContext.Provider>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Language" element={<Language />} />
      </Routes>
         <Slider />

    </travelContext.Provider>
  );
}

export default App;
