const mongoose = require('mongoose');

const resetPasswordSchema = new mongoose.Schema({
    
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
        expires: 300
    }

}, {
    timestamps: true
});

const resetPassword = mongoose.model('Reset-Password', resetPasswordSchema);
module.exports = resetPassword;