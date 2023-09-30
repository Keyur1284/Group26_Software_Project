const mongoose = require('mongoose');
const validator = require('validator');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
    }, 
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: false,
        default: []
    }],   
}, {
    timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;