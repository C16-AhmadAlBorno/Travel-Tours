const express = require("express");
const createTicket = require("../Controler/airline");
const airlineRouter = express.Router();
airlineRouter.post("/new", createTicket);
module.exports = airlineRouter;
