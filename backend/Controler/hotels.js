const hotelsModel = require("../models/HotelsSchema");
//=============add new Hotels===========
const addHotels = (req, res) => {
  const { name, city, country, address, stars, description, images, rooms } =
    req.body;
  const newHotels = new hotelsModel({
    name,
    city,
    country,
    address,
    stars,
    description,
    images,
    rooms,
  });
  newHotels
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Hotel saved succssfly",
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = addHotels;
