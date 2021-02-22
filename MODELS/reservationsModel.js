


const mongoose= require('mongoose');

const reservationModel= mongoose.Schema(
    {
        reservationId: String,
        reservationName: String,
        reservationContactNumber: Number,
        reservationCapacity: Number,
        reservationDate: String,
        reservatinStatus: String
    }
)

module.exports= mongoose.model('reservations', reservationModel);