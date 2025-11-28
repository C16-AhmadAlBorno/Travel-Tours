const express = require("express");
const createCustomer = require("../Controler/customers");
const authorization = require("../Middelware/authorization");
const authentication = require("../Middelware/authentication");
const customerRouter = express.Router();
customerRouter.post("/new", createCustomer);
module.exports = customerRouter;
