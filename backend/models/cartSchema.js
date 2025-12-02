const express = require("express");
const { default: mongoose } = require("mongoose");
const cartSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  tourpackage: { type: mongoose.Schema.Types.ObjectId, ref: "Tour" },
});
module.exports = mongoose.model("Cart", cartSchema);
