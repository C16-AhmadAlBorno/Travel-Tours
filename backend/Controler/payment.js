const paymentModel = require("../models/PaymentsSchema");
//==============CreatePayment=============
const payment = (req, res) => {
  const { amount, paymentMethod, status, tourPackage, hotelBooking } = req.body;
  const newpayment = new paymentModel({
    customer: req.token.userId,
    amount,
    paymentMethod,
    status,
    tourPackage,
    hotelBooking,
  });
console.log(newpayment);

  newpayment
    .save()
    .then((result) => {
      console.log(result);

      res.status(201).json({
        success: true,
        message: "Payment created successfully",
        payment: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
//============allpayment=============
const allPayment = (req, res) => {
  paymentModel
    .find({})
    .populate("customer")
    .populate("tourPackage")
    .populate("hotelBooking")
    .then((result) => {
      res.status(200).json({
        success: true,
        payments: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        err: err.message,
      });
    });
};

module.exports = { payment, allPayment };
