import { useState, useEffect } from "react";
import { createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Slider from "./components/Slider";
import Tourpackages from "./components/Tourpackages";
import Register from "./components/Register";
import Map from "./components/Map";
import PackageDetails from "./components/PackageDetails";
import { useLocation } from "react-router-dom";
import Bottompage from "./components/Bottompage";
import i18n from "./components/I18n";
import Navbar from "./components/Home";
export const travelContext = createContext();

function App() {
  const location = useLocation();

  const [tourPackage, setTourPackage] = useState([]);
  const [cart, setCart] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [packagedetailes, setpackageDetailes] = useState([]);
  const [showNavbar, setShowNavbar] = useState(true);   

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const saveToken = localStorage.getItem("token");

      if (saveToken) {
        setToken(saveToken);
        setIsLoggedIn(true);
      }
    }
  }, []);


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
        firstname,
        setFirstname,
        lastname,
        setLastname,
        role,
        setRole,
        confirmPassword,
        setConfirmPassword,
        packagedetailes,
        setpackageDetailes,
        showNavbar,
        setShowNavbar,
      }}
    >
      {!showNavbar ||
      location.pathname === "/Login" ||
      location.pathname === "/Register" ? null :<Home />
      
      }
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Slider /> <br />
              <Tourpackages />
              <br />
              <div>
                <AboutUs />
                <br />
              </div>
              <div>
                <ContactUs />
              </div>
              <br />
              <Map />
              <div>
                <Bottompage />
              </div>
            </>
          }
        />

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/PackageDetails/:id" element={<PackageDetails />} />
      </Routes>
    </travelContext.Provider>
  );
}

export default App;
