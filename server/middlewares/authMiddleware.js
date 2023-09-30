const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');

const employeeAuthMiddleware = asyncHandler(async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try {

            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const employee = await Employee.findById(decoded._id).select('-password');
            req.employee = employee;
            next();
        }

        catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }

    }

    if (!token)
    {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
})


const managerAuthMiddleware = asyncHandler(async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try {

            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const manager = await Manager.findById(decoded._id).select('-password');
            req.manager = manager;
            next();
        }

        catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }

    if (!token)
    {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
})

module.exports = {employeeAuthMiddleware, managerAuthMiddleware};