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


module.exports = {
    findEmployeesController, 
    createProjectController, 
    sendInviteController
};