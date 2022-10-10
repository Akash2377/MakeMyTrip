const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flight_details: {
    baggage: String,
    checkin: String,
    cabin: String,
  },
  name: String,
  departure_time: String,
  arrival_time: String,
  duration: String,
  fare: Number,
  stops: String,
  departure: String,
  arrival: String,
});

const flightModel = mongoose.model("flight", flightSchema);

module.exports = flightModel;
