const mongoose = require("mongoose");

const airlineSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },

  destination: {
    type: String,
    required: true, // KEY destination
  },

  departureTime: {
    type: Date,
    required: true,
  },

  arrivalTime: {
    type: Date,
    required: true,
  },

  duration: {
    type: Number, // minutes or hours
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Airline", airlineSchema);
