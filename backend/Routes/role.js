const express = require("express");

const roleRouter = express.Router();
const { createRole, getALLroles } = require("../Controler/role");

roleRouter.post("/new", createRole);
roleRouter.get("/all", getALLroles);
module.exports = roleRouter;
