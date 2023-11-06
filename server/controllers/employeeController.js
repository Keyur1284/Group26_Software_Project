const Employee = require('../models/employeeModel');
const Invite = require('../models/inviteModel');
const Project = require('../models/projectModel');
const Expense = require('../models/expenseModel');
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


const forgotPasswordController = asyncHandler( async (req, res) => {

    const { email } = req.body;

    const oldUser = await Employee.findOne({ email });

    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }

    const secret = process.env.JWT_SECRET + oldUser.password;

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });

    const link = `http://localhost:5173/reset-password/${oldUser._id}/${token}`;

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hims132003@gmail.com",
          pass: "sukfiheljowippsq",
        },
      });
  
      let mailOptions = {
        from: "hims132003@gmail.com",
        to: email,
        subject: "Password Reset",
        html: `<h2>Please click on given link to reset your password</h2>
                <a href="${link}">Click here to reset your password</a>`,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      res.status(200).json(link);

});

  
const verifyIdAndTokenController = asyncHandler( async (req, res) => {

    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await Employee.findOne({ _id: id });

    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }

    const secret = process.env.JWT_SECRET + oldUser.password;

    try {
      const verify = jwt.verify(token, secret);
      
    //   res.render("index", { email: verify.email, status: "Not Verified" });
    }
    
    catch (error) {
      console.log(error);
      res.send("Not Verified");
    }

});

  
const resetPasswordController = asyncHandler( async (req, res) => {

    const { id, token } = req.params;
    const { password } = req.body;

    const oldUser = await Employee.findOne({ _id: id });

    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }

    const secret = process.env.JWT_SECRET + oldUser.password;


      const verify = jwt.verify(token, secret);
      const hashedPassword = await bcrypt.hash(password, 10);

      await Employee.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: hashedPassword,
          },
        }

      );

      res.json({ status: "verified" });
  
    //   res.render("index", { email: verify.email, status: "verified" });



});


const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}


module.exports = {
    loginController, 
    registerController,
    getEmployeeProfileController,
    forgotPasswordController,
    verifyIdAndTokenController,
    resetPasswordController
};