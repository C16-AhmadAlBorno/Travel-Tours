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
import Tourpackages from "./components/Tourpackages";
export const travelContext = createContext();
function App() {
  const [tourPackage, setTourPackage] = useState([]);
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  localStorage.getItem(token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <travelContext.Provider
      value={{
        tourPackage,
        setTourPackage,
        cart,
        setCart,
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route
          path="/Login"
          element={<Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Language" element={<Language />} />
      </Routes>
      <Slider />

      <Tourpackages />
    </travelContext.Provider>
  );
}

export default App;
