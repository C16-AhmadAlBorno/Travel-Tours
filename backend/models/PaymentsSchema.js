const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  amount: { type: Number, required: true },
  paymentMethod: {
    type: String,
    enum: ["card", "paypal", "cash", "bank"],
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "failed", "refunded"],
    default: "pending",

    tourPackage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
    },

    hotelBooking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
  },
});
module.exports = mongoose.model("", paymentSchema);
