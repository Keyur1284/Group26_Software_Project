const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');
const Project = require('../models/projectModel');
const Expense = require('../models/expenseModel');
const asyncHandler = require('express-async-handler');

const getManagerDashboardController = asyncHandler(async (req, res) => {

    const project_id = req.params.project_id;
    const project = await Project.findById(project_id).populate('employees', 'firstName lastName email');
    
    const approvedExpensesCount = await Expense.countDocuments({project_id, status: 'Approved'});
    const pendingExpensesCount = await Expense.countDocuments({project_id, status: 'Pending'});
    
    const expenses = await Expense.find({project_id, status: 'Approved'});
    let totalMoneySpent = expenses.reduce((total, expense) => total + expense.amount, 0);
    totalMoneySpent = Math.min(totalMoneySpent, project.budget);

    const employeeWiseExpenseArray = [];

    for (let i = 0; i < project.employees.length; i++)
    {
        const employee = project.employees[i];
        const employeeExpenses = await Expense.find({project_id, employee_id: employee._id, status: 'Approved'});
        const employeeTotalMoneySpent = employeeExpenses.reduce((total, expense) => total + expense.amount, 0);
        employeeWiseExpenseArray.push({
            employee_id: employee._id,
            employeeName: employee.firstName + ' ' + employee.lastName,
            employeeEmail: employee.email,
            employeeTotalMoneySpent
        });
    }

    res.status(200).json({
        success: true,
        project,
        approvedExpensesCount,
        pendingExpensesCount,
        totalMoneySpent,
        employeeWiseExpenseArray
    });
})  


const getEmployeeDashboardController = asyncHandler(async (req, res) => {

    const project_id = req.params.project_id;
    const project = await Project.findById(project_id).populate('employees', 'firstName lastName email');
    
    const employee_id = req.employee._id;
    const approvedExpensesCount = await Expense.countDocuments({employee_id, project_id, status: 'Approved'});
    const pendingExpensesCount = await Expense.countDocuments({employee_id, project_id, status: 'Pending'});
    
    const expenses = await Expense.find({project_id, status: 'Approved'});
    let totalMoneySpent = expenses.reduce((total, expense) => total + expense.amount, 0);
    totalMoneySpent = Math.min(totalMoneySpent, project.budget);

    let employeeExpenses = await Expense.find({project_id, employee_id, status: 'Approved'});
    employeeExpenses = employeeExpenses.reduce((total, expense) => total + expense.amount, 0);

    res.status(200).json({
        success: true,
        project,
        approvedExpensesCount,
        pendingExpensesCount,
        totalMoneySpent,
        employeeExpenses
    });
})


module.exports = {
    getManagerDashboardController,
    getEmployeeDashboardController
};