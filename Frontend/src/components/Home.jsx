import React from "react";
import { useContext } from "react";
import { travelContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import Slider from "./Slider";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <nav>
      <div className="topPage">
        <h1 style={{ color: "blue" }}>Travel</h1>
        <div className="topLink">
          <Link to="/">{t("home")} </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setToken("");
              setIsLoggedIn(false);
              Navigate("/");
            }}
          >
            Logout
          </button>
          <Link to="/Register"> {t("register")} </Link>
          <Link to="/Login">{t("login")}</Link>
          <Link to="/Cart">{"cart"}</Link>
          <Link to="/AboutUs">{t("AboutUs")}</Link>
          <Link to="/ContactUs">{t("ContactUs")}</Link>

          <div className="languagechang">
            <button
              onClick={() => {
                i18n.changeLanguage("ar");
                document.body.dir = "rtl";
              }}
            >
              AR
            </button>

            <button
              onClick={() => {
                i18n.changeLanguage("en");
                document.body.dir = "ltr";
              }}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Home;
