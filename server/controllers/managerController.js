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
        throw new Error('Manager must be atleast 18 years old');
    }

    else if (year === currentYear - 18) {

        if (month > currentMonth) {
            res.status(400)
            throw new Error('Manager must be atleast 18 years old');
        }

        else if (month === currentMonth) {

            if (day > currentDay) {
                res.status(400)
                throw new Error('Manager must be atleast 18 years old');
            }
        }
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
            dob: manager.dob,
            contactNo: manager.contactNo,
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


const editProfileController = asyncHandler(async (req, res) => {

    let {firstName, lastName, email, dob, contactNo} = req.body;

    if (!firstName || !lastName || !email || !dob || !contactNo)
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
        throw new Error('Manager must be atleast 18 years old');
    }

    else if (year === currentYear - 18) {

        if (month > currentMonth) {
            res.status(400)
            throw new Error('Manager must be atleast 18 years old');
        }

        else if (month === currentMonth) {

            if (day > currentDay) {
                res.status(400)
                throw new Error('Manager must be atleast 18 years old');
            }
        }
    }

    const manager_id = req.manager._id;
    const updatedManager = await Manager.findByIdAndUpdate(manager_id, req.body, {new: true});

    if (updatedManager)
    {
        res.status(200).json({
            success: true,
            _id: updatedManager._id,
            firstName: updatedManager.firstName,
            lastName: updatedManager.lastName,
            dob: updatedManager.dob,
            contactNo: updatedManager.contactNo,
            email: updatedManager.email,
            role: "manager",
            message: "Profile Updated Successfully",  
            token: generateToken(updatedManager._id)
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

    const manager = await Manager.findById(req.manager._id);

    if (manager)
    {
        res.status(200).json({
            success: true,
            manager: {
                firstName: manager.firstName,
                lastName: manager.lastName,
                dob: manager.dob.getDate() + "-" + (manager.dob.getMonth() + 1) + "-" + manager.dob.getFullYear(),
                contactNo: manager.contactNo,
                email: manager.email,
                joiningDate: manager.createdAt.getDate() + "-" + (manager.createdAt.getMonth() + 1) + "-" + manager.createdAt.getFullYear(),
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

      await Manager.updateOne(
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
    getProfileController,
    editProfileController,
    forgotPasswordController,
    verifyIdAndTokenController,
    resetPasswordController
};