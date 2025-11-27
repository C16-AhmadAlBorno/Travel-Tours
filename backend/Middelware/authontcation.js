const jwt = require("jsonwebtoken");
const authontcation = (req, res, next) => {
  console.log(req.headers.auhtorization);
  try {
    if (!req.headers.auhtorization) {
      return res.status("403").json({
        success: false,
        message: "forbidden",
      });
    }

    const token = req.headers.auhtorization.split(" ").pop();
    jwt.verify(token, process.env.SECRET),
      (err, result) => {
        if (err) {
          res.status(403).json({
            success: false,
            message: "the token is invalid or expire",
          });
        } else {
          req.token = result;
          next();
        }
      };
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
module.exports = authontcation;
