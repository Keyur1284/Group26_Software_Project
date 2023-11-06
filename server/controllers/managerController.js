const Manager = require('../models/managerModel');
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

    const managerExists = await Manager.findOne({email});

    if (managerExists)
    {
        res.status(400)
        // res.json({success: false, message: 'Employee already exists'});
        throw new Error('Manager already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const manager = await Manager.create({
        firstName,
        lastName,
        dob,
        contactNo,
        email,
        password: hashedPassword
    });

    if (manager)
    {
        res.status(200).json({
            success: true,
            manager: {
                _id: manager._id,
                firstName: manager.firstName,
                lastName: manager.lastName,
                dob: manager.dob,
                contactNo: manager.contactNo,
                email: manager.email
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
            firstName: manager.firstName,
            lastName: manager.lastName,
            email: manager.email,
            message: "Login Successful",
            role: "manager",
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


const getManagerProfileController = asyncHandler(async (req, res) => {

    const manager = await Manager.findById(req.manager._id);

    if (manager)
    {
        res.status(200).json({
            success: true,
            manager: {
                firstName: manager.firstName,
                lastName: manager.lastName,
                dob: manager.dob,
                contactNo: manager.contactNo,
                email: manager.email,
                joiningDate: manager.createdAt.toISOString().split('T')[0],
                role: "Manager"
            }
        });
    }

    else
    {
        res.status(404)
        // res.json({success: false, message: 'Employee not found'});
        throw new Error('Manager not found');
    }

});


const forgotPasswordController = asyncHandler( async (req, res) => {

    const { email } = req.body;


      const oldUser = await Manager.findOne({ email });

      if (!oldUser) {
        return res.json({ status: "User Not Exists!!" });
      }

      const secret = process.env.JWT_SECRET + oldUser.password;

      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
        expiresIn: "5m",
      });

      const link = `http://localhost:5173/reset-password/${oldUser._id}/${token}`;

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hims132003@gmail.com",
          pass: "sukfiheljowippsq",
        },
      });
  
      var mailOptions = {
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
    const oldUser = await Manager.findOne({ _id: id });

    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }

    const secret = process.env.JWT_SECRET + oldUser.password;

    try {
      const verify = jwt.verify(token, secret);


    }
    
    catch (error) {
      console.log(error);
      res.send("Not Verified");
    }

});

  
const resetPasswordController = asyncHandler( async (req, res) => {

    const { id, token } = req.params;
    const { password } = req.body;

    const oldUser = await Manager.findOne({ _id: id });

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
  
});


const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}


module.exports = {
    loginController, 
    registerController,
    getManagerProfileController,
    forgotPasswordController,
    verifyIdAndTokenController,
    resetPasswordController
};