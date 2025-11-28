const mongoose = require("mongoose");
const tourpackageSchema = new mongoose.Schema({
  packageName: { type: String, required: true },
  description: { type: String, required: true },

  airline: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airline",
    required: true,
  },

  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },

  price: { type: Number, required: true },
  duration: { type: String, required: true },
  destination: { type: String, required: true },
});
module.exports = mongoose.model("Tour", tourpackageSchema);
