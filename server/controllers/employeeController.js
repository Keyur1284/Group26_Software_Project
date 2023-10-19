const Employee = require('../models/employeeModel');
const Invite = require('../models/inviteModel');
const Project = require('../models/projectModel');
const Expense = require('../models/expenseModel');
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

    const employeeExists = await Employee.findOne({email});

    if (employeeExists)
    {
        res.status(400)
        // res.json({success: false, message: 'Employee already exists'});
        throw new Error('Employee already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await Employee.create({
        name,
        email,
        password: hashedPassword
    });

    if (employee)
    {
        res.status(200).json({
            success: true,
            _id: employee._id,
            name: employee.name,
            email: employee.email,
            message: "Registeration Successful",
            token: generateToken(employee._id)
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

    const employee = await Employee.findOne({email});

    if (!employee)
    {
        res.status(401)
        // res.json({success: false, message: 'Invalid Credentials'});
        throw new Error('User not found');
    }
    
    const comparePassword = await bcrypt.compare(password, employee.password);
    
    if (employee && comparePassword)
    {
        res.status(200).json({
            success: true,
            _id: employee._id,
            name: employee.name,
            email: employee.email,
            message: "Login Successful",
            token: generateToken(employee._id)
        });
    }

    else
    {
        res.status(401)
        // res.json({success: false, message: 'Invalid Credentials'});
        throw new Error('Invalid Credentials');
    }
});


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


const addExpenseController = asyncHandler(async (req, res) => {

    const {name, date, category, amount, description, project_id, file} = req.body;
    const employee_id = req.employee._id;


    if(!name || !date || !category || !amount || !project_id || !file)
    {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    if (amount <= 0)
    {
        res.status(400)
        // res.json({success: false, message: 'Amount must be greater than 0'});
        throw new Error('Amount must be greater than 0');
    }

    let currentDate = new Date();
    const istOffset = 330 * 60000;
    currentDate = new Date(currentDate.getTime() + istOffset);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    
    const dateArray = date.split('-');
    const year = parseInt(dateArray[0]);
    const month = parseInt(dateArray[1]);
    const day = parseInt(dateArray[2]);
    
    if (year > currentYear)
    {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }
    
    if (year === currentYear && month > currentMonth)
    {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }
    
    if (year === currentYear && month === currentMonth && day > currentDay)
    {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }

    const expense = await Expense.create({
        name,
        date,
        category,
        description,
        amount,
        project_id,
        employee_id,
        file
    });

    if(expense){
        res.status(200).json({
            success: true,
            expense
        });
    }

    else{
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }

});


const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}



module.exports = {
    loginController, 
    registerController,
    getInvitesController,
    acceptInviteController,
    addExpenseController
};