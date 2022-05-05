const express = require('express');
const app = express();

const flightController = require("./controller/flight.controller");
const hotelController = require("./controller/hotel.controller");
const numController = require("./controller/num.controller");
const strController = require("./controller/str.controller");

app.use("/flight", flightController)
app.use("/hotel", hotelController)
app.use("/num", numController)
app.use("/str",strController)

module.exports = app;
