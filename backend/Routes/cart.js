const express = require("express");
const {
  addToCart,
  allCartItem,
  cartDeleted,
  updateCartItem,
} = require("../Controler/cart");
const cartRouter = express.Router();
cartRouter.post("/new", addToCart);
cartRouter.get("/items", allCartItem);
cartRouter.delete("/delete/:_id", cartDeleted);
cartRouter.put("/update/:_id", updateCartItem);
module.exports = cartRouter;
