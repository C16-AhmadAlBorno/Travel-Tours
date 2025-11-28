const airlineTicketModel = require("../models/AirLineSchema");
//==========createTicket==========
const createTicket = (req, res) => {
  const { airline, destination, departureTime, arrivalTime, duration, price } =
    req.body;
  const newTicket = new airlineTicketModel({
    airline,
    destination,
    departureTime,
    arrivalTime,
    duration,
    price,
  });
  newTicket
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "ticket created",
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
module.exports = createTicket;
