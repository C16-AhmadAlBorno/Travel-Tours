import React, { useContext } from "react";
import { travelContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Login from "./Login";
import Dropdown from "react-bootstrap/Dropdown";

function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const { setToken, setIsLoggedIn, isLoggedIn } = useContext(travelContext);
  const { showNavbar } = useContext(travelContext);

  const logout = () => {
    localStorage.removeItem("token");

    setToken("");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {showNavbar && (
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#2f2f6a" }}
        >
          <div className="container">
            <Link
              className="navbar-brand fw-bold"
              to="/"
              style={{ fontSize: "26px" }}
            >
              Travel
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    {t("home")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Cart">
                    Cart
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/AboutUs">
                    {t("AboutUs")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/ContactUs">
                    {t("ContactUs")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    {t("")}
                  </Link>
                </li>
              </ul>

              <div className="d-flex align-items-center gap-2">
                <Dropdown>
                  <Dropdown.Toggle className="accountButton">
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/Login">
                      Login
                    </Dropdown.Item>

                    <Dropdown.Item as={Link} to="/Register">
                      Register
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    document.body.dir = "rtl";
                  }}
                >
                  AR
                </button>

                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    document.body.dir = "ltr";
                  }}
                >
                  EN
                </button>

                {isLoggedIn && (
                  <button
                    className="btn btn-light btn-sm ms-2"
                    onClick={logout}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Home;
