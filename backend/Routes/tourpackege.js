const express = require("express");
const { createPackage, tourPackages } = require("../Controler/tourpackege");
const tourRouter = express.Router();
tourRouter.post("/new", createPackage);
tourRouter.get("/Packages", tourPackages);
module.exports = tourRouter;
