const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Please enter project name'],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: [true, 'Please add employees id'],
        default: []
    }],
    manager_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the manager id'],
        ref: 'Manager'
    },
    budget: {
        type: Number,
        required: [true, 'Please enter the budget'],
    },
    alertLimit: {
        type: Number,
        required: [true, 'Please enter the alert limit'],
    }
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;