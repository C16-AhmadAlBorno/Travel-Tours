import React from "react";
import { useContext, useEffect } from "react";
import { travelContext } from "../App";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
function Login() {
  const { setShowNavbar } = useContext(travelContext);
  const navigate = useNavigate();

  const {
    email,
    setEmail,
    password,
    setPassword,
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
  } = useContext(travelContext);
  const loginPortalnew = () => {
    const customerData = { email, password };
    axios
      .post("http://localhost:5000/customers/login", customerData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);

        setShowNavbar(false);
        setIsLoggedIn(true);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="loginnow">
      <Form className="Loginpage">
        <Form.Group
          className="LoginCustomer"
          controlId="formBasicEmail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="LoginPassword"
          controlId="formBasicPassword"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="LoginCheakbox" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
      <button className="loginbutton" onClick={loginPortalnew}>
        Login{" "}
      </button>
    </div>
  );
}

export default Login;
