const mongoose = require('mongoose');
const validator = require('validator');

const managerSchema = new mongoose.Schema({
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

const Manager = mongoose.model('Manager', managerSchema);
module.exports = Manager;