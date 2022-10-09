const mongoose = require('mongoose');

const flightbookingSchema = new mongoose.Schema({
    name: String,
    departure_time: String,
    arrival_time: String,
    fare: Number,
    stops: String,
    departure: String,
    arrival: String,
})

const flightbookingModel = new mongoose.model('flightbooking',flightbookingSchema);

module.exports =flightbookingModel ;