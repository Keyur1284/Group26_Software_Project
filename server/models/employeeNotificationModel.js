// model to notify the employee about the status of the expense request if accepted or rejected by manager

const mongoose = require('mongoose');

const employeeNotificationSchema = new mongoose.Schema({

    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the employee id'],
        ref: 'Employee'
    },
    expense_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the expense id'],
        ref: 'Expense'
    },
    status: {
        type: String,
        required: false,
        enum: {
            values: ['Pending', 'Approved', 'Rejected'],
            default: 'Pending',
            message: 'Status is invalid!'
        }
    },
    message: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true
});


const employeeNotification = mongoose.model('Employee-Notification', employeeNotificationSchema);
module.exports = employeeNotification;