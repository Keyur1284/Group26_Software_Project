const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');
const Project = require('../models/projectModel');
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

    if (budget <= 0)
    {
        res.status(400)
        // res.json({success: false, message: 'Budget must be greater than 0'});
        throw new Error('Budget must be greater than 0');
    }

    const projectNameExist = await Project.findOne({name}); 

    if (projectNameExist)
    {
        res.status(400)
        // res.json({success: false, message: 'Project name already exists'});
        throw new Error('Project name already exists');
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
    getProjectsEmployeeController,
    getProjectsManagerController
};