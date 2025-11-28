const roleModel = require("../models/RoleSchema");

//=========Create Role=========

const createRole = (req, res) => {
  const { role, permissions } = req.body;
  const newRole = new roleModel({ role, permissions });
  newRole
    .save()
    .then((result) => {
      res.status(401).json({
        success: true,
        message: "role create sucussefly",
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
//========GetALLRoles=======
const getALLroles = (req, res) => {
  roleModel.find({}, "-__v").then((result) => {
    res
      .status(200)
      .json({
        success: true,
        message: "this is roles",
        roles: result,
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "server failed",
        });
      });
  });
};
module.exports = { createRole, getALLroles };
