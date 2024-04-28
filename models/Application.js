// models/Application.js
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    user: {
        name: String,
        email: String
    },
    status: String,
    cv: String,
    meetingDateTime: Date // Field to store meeting date and time
});

module.exports = mongoose.model('Application', ApplicationSchema);
