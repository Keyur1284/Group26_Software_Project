const mongoose = require('mongoose');

const managerNotificationSchema = new mongoose.Schema({

    manager_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the manager id'],
        ref: 'Manager'
    },
    expense_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the expense id'],
        ref: 'Expense'
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