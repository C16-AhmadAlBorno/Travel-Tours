const express = require("express");
const { addToCart, allCartItem, cartDeleted } = require("../Controler/cart");
const cartRouter = express.Router();
cartRouter.post("/new", addToCart);
cartRouter.get("/items", allCartItem);
cartRouter.delete("/delete/:_id", cartDeleted);
module.exports = cartRouter;
