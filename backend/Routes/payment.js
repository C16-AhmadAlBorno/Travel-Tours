const express = require("express");
const { payment, allPayment } = require("../Controler/payment");
const authentication = require("../Middelware/authentication");
const paymentRouter = express.Router();
paymentRouter.post("/new", authentication, payment);
paymentRouter.get("/", allPayment);
module.exports = paymentRouter;
