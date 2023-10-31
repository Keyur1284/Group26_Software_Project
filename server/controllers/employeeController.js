const Employee = require('../models/employeeModel');
const Invite = require('../models/inviteModel');
const Project = require('../models/projectModel');
const Expense = require('../models/expenseModel');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const registerController = asyncHandler(async (req, res) => {

    const {firstName, lastName, email, dob, contactNo, password} = req.body;

    if (!firstName || !lastName || !email || !password || !dob || !contactNo)
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
        firstName,
        lastName,
        dob,
        contactNo,
        email,
        password: hashedPassword
    });

    if (employee)
    {
        res.status(200).json({
            success: true,
            employee: {
                _id: employee._id,
                firstName: employee.firstName,
                lastName: employee.lastName,
                dob: employee.dob,
                contactNo: employee.contactNo,
                email: employee.email
            },
            message: "Registeration Successful"
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
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            message: "Login Successful",
            role: "employee",
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


const getEmployeeProfileController = asyncHandler(async (req, res) => {

    const employee = await Employee.findById(req.employee._id);

    if (employee)
    {
        res.status(200).json({
            success: true,
            employee: {
                firstName: employee.firstName,
                lastName: employee.lastName,
                dob: employee.dob,
                contactNo: employee.contactNo,
                email: employee.email,
                joiningDate: employee.createdAt.toISOString().split('T')[0],
                role: "Employee"
            }
        });
    }

    else
    {
        res.status(404)
        // res.json({success: false, message: 'Employee not found'});
        throw new Error('Employee not found');
    }

});


const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}



module.exports = {
    loginController, 
    registerController,
    getEmployeeProfileController
};