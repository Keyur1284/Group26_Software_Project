const Employee = require('../models/employeeModel');
const ResetPassword = require('../models/resetPasswordModel');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");


const registerController = asyncHandler(async (req, res) => {

    let {firstName, lastName, email, dob, contactNo, password} = req.body;

    if (!firstName || !lastName || !email || !password || !dob || !contactNo)
    {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    let currentDate = new Date();
    const istOffset = 330 * 60000;
    currentDate = new Date(currentDate.getTime() + istOffset);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const dateArray = dob.split('-');
    const year = parseInt(dateArray[0]);
    const month = parseInt(dateArray[1]);
    const day = parseInt(dateArray[2]);

    if (year > currentYear - 18) {
        res.status(400)
        throw new Error('Employee must be atleast 18 years old');
    }

    else if (year === currentYear - 18) {

        if (month > currentMonth) {
            res.status(400)
            throw new Error('Employee must be atleast 18 years old');
        }

        else if (month === currentMonth) {

            if (day > currentDay) {
                res.status(400)
                throw new Error('Employee must be atleast 18 years old');
            }
        }
    }

    email = email.toLowerCase();

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
    
    let {email, password} = req.body;

    if (!email || !password)
    {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    email = email.toLowerCase();

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
            dob: employee.dob,
            contactNo: employee.contactNo,
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


const editProfileController = asyncHandler(async (req, res) => {

    const { firstName, lastName, dob, contactNo } = req.body;

    if (!firstName || !lastName || !dob || !contactNo)
    {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    let currentDate = new Date();
    const istOffset = 330 * 60000;
    currentDate = new Date(currentDate.getTime() + istOffset);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const dateArray = dob.split('-');
    const year = parseInt(dateArray[0]);
    const month = parseInt(dateArray[1]);
    const day = parseInt(dateArray[2]);

    if (year > currentYear - 18) {
        res.status(400)
        throw new Error('Employee must be atleast 18 years old');
    }

    else if (year === currentYear - 18) {

        if (month > currentMonth) {
            res.status(400)
            throw new Error('Employee must be atleast 18 years old');
        }

        else if (month === currentMonth) {

            if (day > currentDay) {
                res.status(400)
                throw new Error('Employee must be atleast 18 years old');
            }
        }
    }

    const employee_id = req.employee._id;
    const updatedEmployee = await Employee.findByIdAndUpdate(employee_id, req.body, {new: true});

    if (updatedEmployee)
    {
        res.status(200).json({
            success: true,
              _id: updatedEmployee._id,
              firstName: updatedEmployee.firstName,
              lastName: updatedEmployee.lastName,
              dob: updatedEmployee.dob,
              contactNo: updatedEmployee.contactNo,
              email: updatedEmployee.email,
              role: "employee",
              token: generateToken(updatedEmployee._id),
              message: "Profile Updated Successfully!"
        });
    }

    else
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid user data'});
        throw new Error('Invalid user data');
    }
});


const getProfileController = asyncHandler(async (req, res) => {

    const employee = await Employee.findById(req.employee._id);

    if (employee)
    {
        res.status(200).json({
            success: true,
            employee: {
                firstName: employee.firstName,
                lastName: employee.lastName,
                dob: employee.dob.getDate() + "-" + (employee.dob.getMonth() + 1) + "-" + employee.dob.getFullYear(),
                contactNo: employee.contactNo,
                email: employee.email,
                joiningDate: employee.createdAt.getDate() + "-" + (employee.createdAt.getMonth() + 1) + "-" + employee.createdAt.getFullYear(),
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


const forgotPasswordController = asyncHandler( async (req, res) => {

    const { email } = req.body;

    const oldUser = await Employee.findOne({ email });

    if (!oldUser) 
    {
        res.status(404)
        // res.json({success: false, message: 'User not found'});
        throw new Error('User not found!');
    }

    const otp = generateRandomOTP(8);

    const resetPassword = await ResetPassword.create({ otp, employee_id: oldUser._id });

    const link = `http://localhost:5173/reset-password/${resetPassword._id}`;

    let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
    });

    let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Reset your password for Xpense Tracker",
    html: `<div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px;">
            <h2>Xpense Tracker Password Reset</h2>
            <p>Hello ${oldUser.firstName + " " + oldUser.lastName},</p>
            <p>We received a request to reset your password for Xpense Tracker. If you did not make this request, please ignore this email.</p>
            <p>Use this otp to reset your password: ${otp}</p>
            <p>To reset your password, click on the link below:</p>
            <p><a href="${link}" style="display: inline-block; padding: 10px 20px; background-color: #3498db; color: #ffffff; text-decoration: none;">Reset Password</a></p>
            <p>If the above link doesn't work, copy and paste the following URL into your browser:</p>
            <p>${link}</p>
            <p>This otp will expire in 5 minutes for security reasons.</p>
            <p>To get a new otp, visit <a href="http://localhost:5173/forgot-password">this link</a> and enter your email address.</p>
            <p>Thank you,<br>Xpense Tracker Team</p>
        </div>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
    if (error)
    {
        res.status(400)
        // res.json({success: false, message: 'Something went wrong'});
        throw new Error('Something went wrong');
    }
    else
    {
        res.status(200).json({ message: "Email sent successfully!", success: true, link });
    }
    });
});

  
const resetPasswordController = asyncHandler( async (req, res) => {

    const reset_id = req.params.reset_id;
    const { password, otp } = req.body;

    const resetPassword = await ResetPassword.findById(reset_id);

    if (!resetPassword)
    {
        res.status(404)
        // res.json({success: false, message: 'Invalid reset link'});
        throw new Error('Invalid reset link');
    }

    if (resetPassword.otp != otp)
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid OTP'});
        throw new Error('Invalid OTP');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await Employee.findByIdAndUpdate(resetPassword.employee_id, { password: hashedPassword }, { new: true });

    if (!updatedUser)
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid user data'});
        throw new Error('Invalid user data');
    }

    const deleteResetPassword = await ResetPassword.findByIdAndDelete(reset_id);
    res.status(200).json({ message: "Password updated successfully!", success: true});
});


const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}

const  generateRandomOTP = (length) => {

    const digits = '0123456789';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  
    const allCharacters = digits + uppercaseLetters + lowercaseLetters;
  
    let OTP = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      OTP += allCharacters.charAt(randomIndex);
    }
  
    return OTP;
}

module.exports = {
    loginController, 
    registerController,
    getProfileController,
    editProfileController,
    forgotPasswordController,
    resetPasswordController
};