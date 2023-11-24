const mongoose = require('mongoose');
const validator = require('validator');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first-name'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last-name'],
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
    dob: {
        type: Date,
        required: [true, 'Please enter your date of birth'],
    },
    contactNo: {
        type: String,
        required: [true, 'Please enter your contact-number'],
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Contact number is invalid');
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