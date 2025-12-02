import React from "react";
import { useContext, useEffect } from "react";
import { travelContext } from "../App";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { data } from "react-router-dom";
function Register() {
  const {
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
  } = useContext(travelContext);
  const registerNew = () => {
    const custumerNewdata = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      role: role,
    };
    axios
      .post("http://localhost:5000/customers/register", custumerNewdata)
      .then((res) => {
        console.log("register sucssfuly", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Form>
        <FormGroup className="mb-3" controlId="formBasicfirstname">
          <FormLabel>firstname</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasiclastname">
          <FormLabel>lastname</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Email address</FormLabel>
          <FormControl
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicPassword">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicConfirmPassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicrole">
          <FormLabel>Role</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter lastname"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </FormGroup>
      </Form>
      <button onClick={registerNew}>Register</button>
    </div>
  );
}

export default Register;
