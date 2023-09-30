const mongoose = require('mongoose');

const inviteSchema = new mongoose.Schema({
    

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
    manager_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please enter the manager id'],
        ref: 'Manager'
    }
    
    
}, {
    timestamps: true
});

const Invite = mongoose.model('Invite', inviteSchema);
module.exports = Invite;