const express = require("express");
//require("dotenv").config();
require("./models/db");
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
