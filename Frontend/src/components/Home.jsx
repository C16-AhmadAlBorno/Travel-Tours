import React from "react";
import { useContext } from "react";
import { travelContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import Slider from "./Slider";

function Home() {
  return (
    <div className="topPage">
      <h1 style={{ color: "blue" }}>Travel</h1>
      <div className="topLink">
        <Link to="/"> Home </Link>
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
        <Link to="/Register"> Register </Link>
        <Link to="/Login">Login</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/ContactUs">ContactUs</Link>
        <Link to="/Language">Language</Link>
      </div>
    </div>
  );
}

export default Home;
