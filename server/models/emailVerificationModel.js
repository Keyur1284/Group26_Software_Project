const mongoose = require('mongoose');

const emailVerificationSchema = new mongoose.Schema({
    
    otp: {
        type: String,
        required: [true, 'OTP is required'],
        trim: true,
    },
    manager_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manager',
        required: false
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600
    }
}, {
    timestamps: true
});

const emailVerification = mongoose.model('Email-Verification', emailVerificationSchema);
module.exports = emailVerification;