const express = require("express");
const addHotels = require("../Controler/hotels");
const hotelRouter = express.Router();
hotelRouter.post("/new", addHotels);
module.exports = hotelRouter;
