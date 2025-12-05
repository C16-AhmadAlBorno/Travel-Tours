const cartModel = require("../models/cartSchema");
//==================postPackageToCart=========
const addToCart = (req, res) => {
  const { customer, tourpackage } = req.body;
  const newItem = new cartModel({ customer, tourpackage });
  newItem
    .save()
    .then((result) => {
      res.status(201).json({
        sucsuss: true,
        message: "ITEM ADD TO CART DONE",
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        sucsuss: false,
        message: "server error",
        err,
      });
    });
};

//==========get items ===============
const allCartItem = (req, res) => {
  cartModel
    .find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        cart: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        err: err.message,
      });
    });
};
//=================delete from cart============
const cartDeleted = (req, res) => {
  const { _id } = req.params;

  cartModel
    .findByIdAndDelete({ _id })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "item deleted succsfuly",
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "error server",

        err,
      });
    });
};
//================== update item in cart ==================
const updateCartItem = (req, res) => {
  const { _id } = req.params;
  const { tourpackage } = req.body;

  cartModel
    .findByIdAndUpdate(_id, { tourpackage }, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Item not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Item updated successfully",
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err,
      });
    });
};
module.exports = { addToCart, allCartItem, cartDeleted ,updateCartItem};
