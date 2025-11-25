const mongoose = require("mongoose");
const tourpackageSchema = new mongoose.Schema({
  packageName: { type: String },
  Description: { type: String },
  price: { type: Number },
  duration: { type: Number },
  Destination: { type: mongoose.Schema.Types.ObjectId, ref: "Airline" },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
});
module.exports = mongoose.model("Tour", tourpackageSchema);
