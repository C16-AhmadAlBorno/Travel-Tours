const express = require("express");
const {
  createPackage,
  tourPackages,
  getTourById,
} = require("../Controler/tourpackege");
const tourRouter = express.Router();
tourRouter.post("/new", createPackage);
tourRouter.get("/Packages", tourPackages);
tourRouter.get("/Packages/:_id", getTourById);
module.exports = tourRouter;
