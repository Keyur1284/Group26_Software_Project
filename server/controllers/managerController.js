const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');
const Project = require('../models/projectModel');
const Invite = require('../models/inviteModel');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const registerController = asyncHandler(async (req, res) => {

    const {name, email, password} = req.body;

    if (!name || !email || !password)
    {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    const managerExists = await Manager.findOne({email});

    if (managerExists)
    {
        res.status(400)
        // res.json({success: false, message: 'Employee already exists'});
        throw new Error('Manager already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const manager = await Manager.create({
        name,
        email,
        password: hashedPassword
    });

    if (manager)
    {
        res.status(200).json({
            success: true,
            _id: manager._id,
            name: manager.name,
            email: manager.email,
            message: "Registeration Successful",
            token: generateToken(manager._id)
        });
    }

    else
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid user data'});
        throw new Error('Invalid user data');
    }
});


const loginController = asyncHandler(async (req, res) => {
    
    const {email, password} = req.body;

    if (!email || !password)
    {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    const manager = await Manager.findOne({email});

    if (!manager)
    {
        res.status(401)
        // res.json({success: false, message: 'Invalid Credentials'});
        throw new Error('User not found');
    }
    
    const comparePassword = await bcrypt.compare(password, manager.password);
    
    if (manager && comparePassword)
    {
        res.status(200).json({
            success: true,
            _id: manager._id,
            name: manager.name,
            email: manager.email,
            message: "Login Successful",
            token: generateToken(manager._id)
        });
    }

    else
    {
        res.status(401)
        // res.json({success: false, message: 'Invalid Credentials'});
        throw new Error('Invalid Credentials');
    }
});


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


const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}


module.exports = {
    loginController, 
    registerController, 
    findEmployeesController, 
    createProjectController, 
    sendInviteController
};