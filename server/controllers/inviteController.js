const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');
const Project = require('../models/projectModel');
const Invite = require('../models/inviteModel');
const asyncHandler = require('express-async-handler');


const sendInviteController = asyncHandler(async (req, res) => {

    const {email} = req.body;
    const project_id = req.params.project_id;
    const manager_id =  req.manager._id;

    const employee = await Employee.findOne({email});
    const manager = await Manager.findById(manager_id);
    const project = await Project.findById(project_id);
    

    if (!employee || !manager || !project)
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }

    const employee_id = employee._id;
    const employeeProjects = employee.projects;
    const projectExists = employeeProjects.includes(project_id);

    if (projectExists)
    {
        res.status(400)
        // res.json({success: false, message: 'Employee is already present in the project!'});
        throw new Error('Employee is already present in the project!');
    }

    {
        const invite = await Invite.create({
            employee_id,
            project_id,
            manager_id
        });


        if (invite)
        {
            res.status(200).json({
                success: true,
                invite
            });
        }

        else
        {
            res.status(400)
            // res.json({success: false, message: 'Invalid data'});
            throw new Error('Invalid data');
        }
    }
})


const getInvitesController = asyncHandler(async (req, res) => {
   
    const employee_id = req.employee._id;
    let invitations = await Invite.find({employee_id});
    
    const project_ids = [];
    const uniqueInvites = [];

    invitations.forEach(invite => {
        if (!project_ids.find((project_id) => (String(invite.project_id) === String(project_id))))
        {
            project_ids.push(invite.project_id);
            uniqueInvites.push(invite);
        }
    });

    invitations = uniqueInvites;

    if (invitations.length > 0)
    {
        res.status(200).json({
            success: true,
            invitations
        });
    }

    else
    {
        res.status(200).json({
            success: true,
            message: "No invitations found"
        });
    }
});


const acceptInviteController = asyncHandler(async (req, res) => {

    const {invite_id} = req.body;
    const employee_id = req.employee._id;
    const invite = await Invite.findById(invite_id);
    const project = await Project.findById(invite.project_id);

    if (invite && project)
    {
        const employee = await Employee.findById(employee_id);
        
        employee.projects.push(project._id);
        await employee.save();
        
        project.employees.push(employee._id);
        await project.save();
        
        await Invite.deleteMany({project_id: invite.project_id});
        
        res.status(200).json({
            success: true,
            employee,
            project,
            message: "Invite accepted"
        });
    }

    else
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid invite'});
        throw new Error('Invalid invite');
    }
})


module.exports = {
    sendInviteController,
    getInvitesController,
    acceptInviteController
};