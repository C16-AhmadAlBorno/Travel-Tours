const mongoose = require("mongoose");
const hotelsSchema = new mongoose.Schema({
  name: { type: String, required: true },

  city: { type: String, required: true },

  country: { type: String, required: true },

  address: { type: String, required: true },

  stars: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },

  description: { type: String },

  images: [{ type: String }],

  rooms: [
    {
      roomType: { type: String, required: true },
      price: { type: Number, required: true },
      capacity: { type: Number, required: true },
      available: { type: Boolean, default: true },
    },
  ],
});
module.exports = mongoose.model("Hotel", hotelsSchema);
