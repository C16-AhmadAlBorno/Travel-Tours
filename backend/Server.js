const express = require("express");
const customersrouter = require("./Routes/customers");
const roleRouter = require("./Routes/role");
const tourPacakeRouter = require("./Routes/tourpackege");
const airlineRouter = require("./Routes/airline");
const hotelRouter = require("./Routes/hotels");
const paymentRouter = require("./Routes/payment");
const cartRouter = require("./Routes/cart");
require("dotenv").config();
require("./models/db");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const PORT = 5000;
app.use("/customers", customersrouter);
app.use("/roles", roleRouter);
app.use("/tours", tourPacakeRouter);
app.use("/airlines", airlineRouter);
app.use("/hotels", hotelRouter);
app.use("/payments", paymentRouter);
app.use("/Carts", cartRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
