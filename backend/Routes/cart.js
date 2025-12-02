const express = require("express");
const { addToCart } = require("../Controler/cart");
const cartRouter = express.Router();
cartRouter.post("/item", addToCart);
module.exports = cartRouter;
