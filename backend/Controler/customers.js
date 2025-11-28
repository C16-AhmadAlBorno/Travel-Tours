const customersModel = require("../models/customerSchema");
//=================create new customers============
const createCustomer = (req, res) => {
  const { firstname, lastname, email, password, role } = req.body;
  const newCustomer = new customersModel({
    firstname,
    lastname,
    email,
    password,
    role,
  });
  newCustomer
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Customer saved succssfly",
        result,
      });
    })
    .catch((err) => {
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = createCustomer;
