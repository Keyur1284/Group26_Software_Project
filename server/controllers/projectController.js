const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');
const Project = require('../models/projectModel');
const Invite = require('../models/inviteModel');
const asyncHandler = require('express-async-handler');


const createProjectController = asyncHandler(async (req, res) => {

    const {name, description, budget} = req.body;
    const manager_id = req.manager._id;

    if (!name || !budget)
    {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    const project = await Project.create({
        name,
        description,
        budget,
        manager_id
    });

    if (project)
    {
        const manager = await Manager.findById(manager_id);
        manager.projects.push(project._id);
        await manager.save();

        res.status(200).json({
            success: true,
            project
        });
    }

    else
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }
})


const findEmployeesController = asyncHandler(async (req, res) => {

    const regex = new RegExp(req.query.email, 'i');
    const employees = await Employee.find({email: regex});

    if (employees)
    {
        res.status(200).json({
            success: true,
            employees
        });
    }

    else
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid user data'});
        throw new Error('Invalid user data');
    }
})


const sendInviteController = asyncHandler(async (req, res) => {

    const {employee_id, project_id} = req.body;
    const manager_id =  req.manager._id;

    const employee = await Employee.findById(employee_id);
    const manager = await Manager.findById(manager_id);
    const project = await Project.findById(project_id);
    

    if (!employee || !manager || !project)
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }


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
})


const getInvitesController = asyncHandler(async (req, res) => {
   
    const employee_id = req.employee._id;
    const invitations = await Invite.find({employee_id});
    
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
        
        await Invite.findByIdAndDelete(invite_id);
        
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


const getProjectsEmployeeController = asyncHandler(async (req, res) => {

    const employee_id = req.employee._id;
    const employee = await Employee.findById(employee_id).populate('projects');
    const projects = employee.projects;

    if (projects.length > 0)
    {
        res.status(200).json({
            success: true,
            projects
        });
    }

    else
    {
        res.status(200).json({
            success: true,
            message: "No projects found!"
        });
    }
});


const getProjectsManagerController = asyncHandler(async (req, res) => {

    const manager_id = req.manager._id;
    const manager = await Manager.findById(manager_id).populate('projects');
    const projects = manager.projects;

    if (projects.length > 0)
    {
        res.status(200).json({
            success: true,
            projects
        });
    }

    else
    {
        res.status(200).json({
            success: true,
            message: "No projects found!"
        });
    }

});


module.exports = {
    findEmployeesController, 
    createProjectController, 
    sendInviteController,
    getInvitesController,
    acceptInviteController,
    getProjectsEmployeeController,
    getProjectsManagerController
};