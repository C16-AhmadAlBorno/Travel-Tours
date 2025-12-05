const tourPackageModel = require("../models/TourPackageSchema");
//=============CreateNewPackage==========
const createPackage = (req, res) => {
  const {
    packageName,
    description,
    airline,
    hotel,
    price,
    duration,
    destination,
  } = req.body;
  const newPackage = new tourPackageModel({
    packageName,
    description,
    airline,
    hotel,
    price,
    duration,
    destination,
  });
  newPackage
    .save()
    .then((result) => {
      res.status(401).json({
        success: true,
        message: "PakegeTour added sucussefly",
        role: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server failed",
      });
    });
};

//================AllTOUERS===============
const tourPackages = (req, res) => {
  tourPackageModel
    .find()
    .populate("hotel")
    .populate("airline")
    .then((result) => {
      if (!result) {
        res.status(403).json({
          success: false,
          message: `pacakge not found or expired date`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `pacakge found succsesfly`,
          result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `server failed`,
      });
    });
};
//==============PACAGEBYID==============
const getTourById = (req, res) => {
  const { _id } = req.params;

  tourPackageModel
    .findById(_id )
    .populate("airline")
    .populate("hotel")
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Package not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Package found",
        package: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        error,
      });
    });
};
module.exports = { createPackage, tourPackages, getTourById };
