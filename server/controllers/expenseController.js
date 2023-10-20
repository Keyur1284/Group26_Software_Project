const Expense = require('../models/expenseModel');
const Project = require('../models/projectModel');
const employeeNotification = require('../models/employeeNotificationModel');
const managerNotification = require('../models/managerNotificationModel');
const asyncHandler = require('express-async-handler');


const addExpenseController = asyncHandler(async (req, res) => {

    const { name, date, category, amount, description, file } = req.body;
    const project_id = req.params.project_id;
    const employee_id = req.employee._id;
    const project = await Project.findById(project_id);
    const manager_id = project.manager_id;

    if (!name || !date || !category || !amount || !project_id || !file) {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    if (amount <= 0) {
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

    if (year > currentYear) {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }

    if (year === currentYear && month > currentMonth) {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }

    if (year === currentYear && month === currentMonth && day > currentDay) {
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
        file,
        status: 'Pending'
    });

    if (expense) {

        const notification = await managerNotification.create({
            manager_id: manager_id,
            expense_id: expense._id,
            message: 'New expense request!'
        });

        if (notification) {
            res.status(200).json({
                success: true,
                expense,
                notification
            });
        }
        
        else {
            res.status(400)
            // res.json({success: false, message: 'Invalid data'});
            throw new Error('Invalid data');
        }
    }

    else {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }

});


const updateExpenseController = asyncHandler(async (req, res) => {

    const { name, date, category, amount, file } = req.body;
    const expense_id = req.params.expense_id;
    const expense = await Expense.findById(expense_id);
    const project_id = expense.project_id;
    const project = await Project.findById(project_id);
    const manager_id = project.manager_id;

    if (!name || !date || !category || !amount || !file) {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    if (amount <= 0) {
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

    if (year > currentYear) {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }

    if (year === currentYear && month > currentMonth) {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }

    if (year === currentYear && month === currentMonth && day > currentDay) {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }

    const updatedExpense = await Expense.findByIdAndUpdate(expense_id, req.body, { new: true });

    if (updatedExpense) {
        
        const notification = await managerNotification.findOneAndDelete({ expense_id });

        const updatedNotification = await managerNotification.create({
            manager_id,
            expense_id: updatedExpense._id,
            message: 'Expense request updated!'
        });

        if (updatedNotification) {
            res.status(200).json({
                success: true,
                updatedExpense,
                updatedNotification
            });
        }

        else {
            res.status(400)
            // res.json({success: false, message: 'Invalid data'});
            throw new Error('Invalid data');
        }
    }

    else {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }

});


const deleteExpenseController = asyncHandler(async (req, res) => {

    const expense_id = req.params.expense_id;
    const deletedExpense = await Expense.findByIdAndDelete(expense_id);

    if (deletedExpense) {
        res.status(200).json({
            success: true,
            deletedExpense
        });
    }

    else {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }

});


const getExpenseEmployeeController = asyncHandler(async (req, res) => {

    const employee_id = req.employee._id;
    const project_id = req.params.project_id;
    const expenses = await Expense.find({ employee_id, project_id });

    if (expenses.length > 0) {
        res.status(200).json({
            success: true,
            expenses
        });
    }

    else {
        res.status(200).json({
            success: true,
            message: "No expenses found!"
        });
    }
});


const getExpenseManagerController = asyncHandler(async (req, res) => {

    const project_id = req.params.project_id;
    const expenses = await Expense.find({ project_id });

    if (expenses.length > 0) {
        res.status(200).json({
            success: true,
            expenses
        });
    }

    else {
        res.status(200).json({
            success: true,
            message: "No expenses found!"
        });
    }

});



const acceptExpenseController = asyncHandler(async (req, res) => {

    const expense_id = req.params.expense_id;
    const expense = await Expense.findByIdAndUpdate(expense_id, { status: 'Approved' }, { new: true });

    if (expense) {

        const notification = await employeeNotification.create({
            employee_id: expense.employee_id,
            expense_id: expense._id,
            message: 'Your expense request has been approved!'
        });

        if (notification) {
            res.status(200).json({
                success: true,
                expense,
                notification
            });
        }

        else {
            res.status(400)
            // res.json({success: false, message: 'Invalid data'});
            throw new Error('Invalid data');
        }
    }

    else {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }

});


const rejectExpenseController = asyncHandler(async (req, res) => {

    const expense_id = req.params.expense_id;
    const expense = await Expense.findByIdAndUpdate(expense_id, { status: 'Rejected' }, { new: true });

    if (expense) {

        const notification = await employeeNotification.create({

            employee_id: expense.employee_id,
            expense_id: expense._id,
            message: 'Your expense request has been rejected!'
        });

        if (notification) {
            res.status(200).json({
                success: true,
                expense,
                notification
            });
        }

        else {
            res.status(400)
            // res.json({success: false, message: 'Invalid data'});
            throw new Error('Invalid data');
        }
    }


    else {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }

});


module.exports = {
    addExpenseController,
    updateExpenseController,
    getExpenseEmployeeController,
    getExpenseManagerController,
    deleteExpenseController,
    acceptExpenseController,
    rejectExpenseController
};