

const mongoose = require('mongoose');
const wantedModel = mongoose.Schema(
    {
        wantedId: String,
        wantedPosition: String,
        wantedDescription: String,
        wantedWorkingHours: String,
        wantedPostCreator: String,
        wantedDate: String
    }
)

module.exports = mongoose.model('wantedPositions', wantedModel);