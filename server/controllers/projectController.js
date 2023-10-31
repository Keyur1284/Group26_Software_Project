const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');
const Project = require('../models/projectModel');
const asyncHandler = require('express-async-handler');


const createProjectController = asyncHandler(async (req, res) => {

    const {name, description, budget, alertLimit} = req.body;
    const manager_id = req.manager._id;

    if (!name || !budget || !alertLimit)
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

    if (alertLimit <= 0 || alertLimit >= 100)
    {
        res.status(400)
        // res.json({success: false, message: 'Alert limit must be greater than 0 and less than 100'});
        throw new Error('Alert limit must be greater than 0 and less than 100');
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
        description: description || "No description provided.",
        budget,
        alertLimit,
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
        const modifiedProjects = [];

        for (let i = 0; i < projects.length; i++)
        {
            const project = projects[i];
            const manager = await Manager.findById(project.manager_id);
            const managerName = manager.firstName + " " + manager.lastName;
            const modifiedProject = {
                ...project._doc,
                managerName
            };
            modifiedProjects.push(modifiedProject);
        }

        res.status(200).json({
            success: true,
            projects: modifiedProjects
        });
    }

    else
    {
        res.status(200).json({
            success: true,
            projects: [],
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
        const modifiedProjects = [];

        for (let i = 0; i < projects.length; i++)
        {
            const project = projects[i];
            const manager = await Manager.findById(project.manager_id);
            const managerName = manager.firstName + " " + manager.lastName;
            const modifiedProject = {
                ...project._doc,
                managerName
            };
            modifiedProjects.push(modifiedProject);
        }

        res.status(200).json({
            success: true,
            projects: modifiedProjects
        });
    }

    else
    {
        res.status(200).json({
            success: true,
            projects: [],
            message: "No projects found!"
        });
    }

});


const getMembersController = asyncHandler(async (req, res) => {
    
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId).populate('employees');
    const employees = project.employees;
    const manager = await Manager.findById(project.manager_id);

    if (employees.length > 0)
    {
        const modifiedEmployees = [];

        for (let i = 0; i < employees.length; i++)
        {
            const employee = employees[i];
            const modifiedEmployee = {
                ...employee._doc,
                password: undefined,
                projects: undefined
            };
            modifiedEmployees.push(modifiedEmployee);
        }

        res.status(200).json({
            success: true,
            manager,
            employees: modifiedEmployees
        });
    }

    else
    {
        res.status(200).json({
            success: true,
            employees: [],
            manager,
            message: "No employees found!"
        });
    }
});


module.exports = {
    findEmployeesController, 
    createProjectController, 
    getProjectsEmployeeController,
    getProjectsManagerController,
    getMembersController
};