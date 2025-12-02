const express = require("express");
const { createCustomer } = require("../Controler/customers");
const authorization = require("../Middelware/authorization");
const authentication = require("../Middelware/authentication");
const { login } = require("../Controler/customers");
const customerRouter = express.Router();
customerRouter.post("/register", createCustomer);
customerRouter.post("/login", login);
module.exports = customerRouter;
