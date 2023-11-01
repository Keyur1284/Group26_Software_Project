const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true
    },
    date: {
        type: Date,
        required: [true, 'Please enter the date'],
        trim: true
    },
    category: {
        type: String,
        enum: {
            values: ['Fuel', 'Equipment', 'Food', 'Office', 'Maintenance', 'Rent', 'Taxes', 'Travel', 'Internet', 'Other'],
            message: 'Category is invalid!'
        },
        required: [true, 'Please enter the category']
    },
    amount: {
        type: Number,
        required: [true, 'Please enter the amount'],
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the project id'],
        ref: 'Project'
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the employee id'],
        ref: 'Employee'
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
    driveLink: {
        type: String, 
        required: [true, 'Please provide a file drive link'],
    }
    
}, {
    timestamps: true
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;