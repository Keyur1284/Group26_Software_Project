const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
 
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the project id'],
        ref: 'Project'
    },
    message: {
        type: String,
        required: [true, 'Please enter the message'],
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Please enter the name'],
        trim: true
    },
}, {
    timestamps: true
});

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;