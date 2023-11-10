const Expense = require('../models/expenseModel');
const Project = require('../models/projectModel');
const Employee = require('../models/employeeModel');
const Manager = require('../models/managerModel');
const employeeNotification = require('../models/employeeNotificationModel');
const managerNotification = require('../models/managerNotificationModel');
const asyncHandler = require('express-async-handler');


const addExpenseController = asyncHandler(async (req, res) => {

    const { name, date, category, amount, description, driveLink } = req.body;
    const project_id = req.params.project_id;
    const employee_id = req.employee._id;
    const employee = await Employee.findById(employee_id);
    const project = await Project.findById(project_id);
    const manager_id = project.manager_id;

    if (!name || !date || !category || !amount || !project_id || !driveLink) {
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
        description: description || "No description provided.",
        amount,
        project_id,
        employee_id,
        driveLink,
        status: 'Pending'
    });

    if (expense) {

        const notification = await managerNotification.create({
            manager_id: manager_id,
            expense_id: expense._id,
            project_id: project_id,
            message: `${employee.firstName + " " + employee.lastName} has requested for an expense in ${project.name}`
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

    const { name, date, category, amount, driveLink } = req.body;
    const employee_id = req.employee._id;
    const employee = await Employee.findById(employee_id);
    const expense_id = req.params.expense_id;
    const expense = await Expense.findById(expense_id);
    const project_id = expense.project_id;
    const project = await Project.findById(project_id);
    const manager_id = project.manager_id;

    if (!name || !date || !category || !amount || !driveLink) {
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
            project_id,
            message: `${employee.firstName + " " + employee.lastName} has updated the expense request in ${project.name}`
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
    const notification = await managerNotification.findOneAndDelete({ expense_id });

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
    const expenses = await Expense.find({ employee_id, project_id }).populate('employee_id', 'firstName lastName').sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        expenses
    });
});


const getExpenseManagerController = asyncHandler(async (req, res) => {

    const project_id = req.params.project_id;
    const expenses = await Expense.find({ project_id }).populate('employee_id', 'firstName lastName').sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        expenses
    });

});


const getExpenseByIdController = asyncHandler(async (req, res) => {

    const expense_id = req.params.expense_id;
    const expense = await Expense.findById(expense_id).populate('employee_id', 'firstName lastName');

    if (expense) {

        res.status(200).json({
            success: true,
            expense
        });
    }

    else {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }

});


const getExpenseManagerByFilterController = asyncHandler(async (req, res) => {

    const project_id = req.params.project_id;
    let { startDate, endDate, filter, category, employeeId, status } = req.body;
    
    startDate = new Date(startDate);
    tempEndDate = new Date(endDate);
    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 1);

    const currentDate = new Date();
    const istDate = new Date(currentDate.getTime() + 330 * 60000);

    if (filter == "custom" && startDate > tempEndDate) {
        
        res.status(400)
        // res.json({success: false, message: 'Start date must be less than or equal to end date'});
        throw new Error('Start date must be less than or equal to end date');
    }

    if (filter == "custom" && startDate > istDate) {

        res.status(400)
        // res.json({success: false, message: 'Start date must be less than or equal to current date'});
        throw new Error('Start date must be less than or equal to current date');
    }

    if (filter == "custom" && tempEndDate > istDate) {

        res.status(400)
        // res.json({success: false, message: 'End date must be less than or equal to current date'});
        throw new Error('End date must be less than or equal to current date');
    }

    const expenses = await Expense.find({
        
        project_id,
        category: category == "all" ? { $ne: null } : category,
        date: filter == "all" ? { $ne: null } : filter == "custom" ? { $gte: startDate, $lt: endDate } : { $gte: istDate.setDate(istDate.getDate() - Number(filter)) },
        employee_id : employeeId == "all" ? { $ne: null } : employeeId,
        status: status == "all" ? { $ne: null } : status

    }).populate('employee_id', 'firstName lastName').sort({ createdAt: -1});

    res.status(200).json({
        success: true,
        expenses
    });
});


const getExpenseEmployeeByFilterController = asyncHandler(async (req, res) => {

    const employee_id = req.employee._id;
    const project_id = req.params.project_id;
    let { startDate, endDate, filter, category, status } = req.body;

    startDate = new Date(startDate);
    tempEndDate = new Date(endDate);
    endDate = new Date(endDate);
    endDate.setDate(endDate.getDate() + 1);

    const currentDate = new Date();
    const istDate = new Date(currentDate.getTime() + 330 * 60000);

    if (filter == "custom" && startDate > tempEndDate) {
            
        res.status(400)
        // res.json({success: false, message: 'Start date must be less than or equal to end date'});
        throw new Error('Start date must be less than or equal to end date');
    }

    if (filter == "custom" && startDate > istDate) {

        res.status(400)
        // res.json({success: false, message: 'Start date must be less than or equal to current date'});
        throw new Error('Start date must be less than or equal to current date');
    }

    if (filter == "custom" && tempEndDate > istDate) {

        res.status(400)
        // res.json({success: false, message: 'End date must be less than or equal to current date'});
        throw new Error('End date must be less than or equal to current date');
    }

    const expenses = await Expense.find({

        employee_id,
        project_id,
        category: category == "all" ? { $ne: null } : category,
        date: filter == "all" ? { $ne: null } : filter == "custom" ? { $gte: startDate, $lt: endDate } : { $gte: istDate.setDate(istDate.getDate() - Number(filter)) },
        status: status == "all" ? { $ne: null } : status

    }).populate('employee_id', 'firstName lastName').sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        expenses
    });
});


const acceptExpenseController = asyncHandler(async (req, res) => {

    const manager_id = req.manager._id;
    const manager = await Manager.findById(manager_id);
    const expense_id = req.params.expense_id;

    const currentExpense = await Expense.findById(expense_id);
    const project_id = currentExpense.project_id;
    const project = await Project.findById(project_id);

    const expenses = await Expense.find({ project_id, status: 'Approved' });
    let totalMoneySpent = expenses.reduce((total, expense) => total + expense.amount, 0);
    let totalBudget = project.budget;

    if (totalMoneySpent + currentExpense.amount > totalBudget) {
        res.status(400)
        // res.json({success: false, message: 'Total budget exceeded, cannot approve this expense'});
        throw new Error('Total budget exceeded, cannot approve this expense. Please update the budget if required.');
    }

    totalMoneySpent += currentExpense.amount;

    const percentageUsed = (totalMoneySpent / totalBudget) * 100;
    let alertLimit = project.alertLimit;

    if (percentageUsed >= alertLimit) {

        const notification = await managerNotification.create({
            manager_id: manager_id,
            project_id: project_id,
            message: `Your project ${project.name} has reached ${alertLimit}% of the budget. Please update the budget if required.`
        });
    }

    if (totalMoneySpent == totalBudget) {

        const notification = await managerNotification.create({
            manager_id: manager_id,
            project_id: project_id,
            message: `Your project ${project.name} has exhausted the budget. Please update the budget if required.`
        });
    }
    
    const expense = await Expense.findByIdAndUpdate(expense_id, { status: 'Approved' }, { new: true });
    
    if (expense) {

        const notification = await employeeNotification.create({
            employee_id: expense.employee_id,
            expense_id: expense._id,
            project_id: project_id,
            message: `${manager.firstName + " " + manager.lastName} has approved your expense request in ${project.name}`
        });

        const deletedNotification = await managerNotification.findOneAndDelete({ expense_id });

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

    const manager_id = req.manager._id;
    const manager = await Manager.findById(manager_id);
    const expense_id = req.params.expense_id;
    const expense = await Expense.findByIdAndUpdate(expense_id, { status: 'Rejected' }, { new: true });
    const project_id = expense.project_id;
    const project = await Project.findById(project_id);

    if (expense) {

        const notification = await employeeNotification.create({

            employee_id: expense.employee_id,
            expense_id: expense._id,
            project_id: expense.project_id,
            message: `${manager.firstName + " " + manager.lastName} has rejected your expense request in ${project.name}`
        });

        const deletedNotification = await managerNotification.findOneAndDelete({ expense_id });

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
    rejectExpenseController,
    getExpenseByIdController,
    getExpenseManagerByFilterController,
    getExpenseEmployeeByFilterController
};