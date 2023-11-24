const mongoose = require('mongoose');

const managerNotificationSchema = new mongoose.Schema({

    manager_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the manager id'],
        ref: 'Manager'
    },
    expense_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Expense'
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the project id'],
        ref: 'Project'
    },
    message: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true
});


const managerNotification = mongoose.model('Manager-Notification', managerNotificationSchema);
module.exports = managerNotification;