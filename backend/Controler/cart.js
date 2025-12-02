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
module.exports = { addToCart };
