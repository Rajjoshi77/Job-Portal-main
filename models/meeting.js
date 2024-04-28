// Meeting.js

import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({
    applicationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
});

const Meeting = mongoose.model('Meeting', meetingSchema);

export default Meeting;
