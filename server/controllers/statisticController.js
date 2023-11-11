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

        if (employeeTotalMoneySpent == 0)
            continue;

        employeeWiseExpenseArray.push({
            employee_id: employee._id,
            employeeName: employee.firstName + ' ' + employee.lastName,
            employeeEmail: employee.email,
            employeeTotalMoneySpent
        });
    }

    employeeWiseExpenseArray.sort((a, b) => b.employeeTotalMoneySpent - a.employeeTotalMoneySpent);

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


const getExpenseContibutionController = asyncHandler(async (req, res) => {

    const expense_id = req.params.expense_id;
    const expense = await Expense.findById(expense_id);

    const project_id = expense.project_id;
    const project = await Project.findById(project_id)

    const expenses = await Expense.find({project_id, status: 'Approved'});
    let totalMoneySpent = expenses.reduce((total, expense) => total + expense.amount, 0);
    totalMoneySpent = Math.min(totalMoneySpent, project.budget);

    const contribution = (expense.status == 'Approved') ? expense.amount : 0;

    res.status(200).json({
        success: true,
        contribution,
        totalMoneySpent,
        project
    });
})


const getManagerAnalyticsController = asyncHandler(async (req, res) => {

    const project_id = req.params.project_id;
    let project = await Project.findById(project_id).populate('employees', 'firstName lastName email').populate('manager_id', 'firstName lastName email');

    project.employees.sort((a, b) => {
        if (a.firstName < b.firstName)
        {
            return -1;
        }
        else if (a.firstName > b.firstName)
        {
            return 1;
        }
        else
        {
            if (a.lastName < b.lastName)
            {
                return -1;
            }
            else if (a.lastName > b.lastName)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
    });

    const expenses = await Expense.find({project_id}).populate('employee_id', 'firstName lastName').sort({date: 1});

    const employeeWiseExpenseArray = [];

    for (let i = 0; i < project.employees.length; i++)
    {
        const employee = project.employees[i];
        const employeeExpenses = await Expense.find({project_id, employee_id: employee._id, status: 'Approved'});
        const employeeTotalMoneySpent = employeeExpenses.reduce((total, expense) => total + expense.amount, 0);

        if (employeeTotalMoneySpent == 0)
            continue;

        employeeWiseExpenseArray.push({
            employee_id: employee._id,
            employeeName: employee.firstName + ' ' + employee.lastName,
            employeeEmail: employee.email,
            employeeTotalMoneySpent
        });
    }

    employeeWiseExpenseArray.sort((a, b) => b.employeeTotalMoneySpent - a.employeeTotalMoneySpent);

    const categoryWiseExpenseArray = [];

    for (let i = 0; i < expenses.length; i++)
    {
        const expense = expenses[i];
        const category = expense.category;

        if (categoryWiseExpenseArray.find((categoryWiseExpense) => categoryWiseExpense.category == category))
            continue;

        const categoryExpenses = await Expense.find({project_id, category, status: 'Approved'});
        const categoryTotalMoneySpent = categoryExpenses.reduce((total, expense) => total + expense.amount, 0);

        if (categoryTotalMoneySpent == 0)
            continue;

        categoryWiseExpenseArray.push({
            category,
            categoryTotalMoneySpent
        });
    }

    categoryWiseExpenseArray.sort((a, b) => b.categoryTotalMoneySpent - a.categoryTotalMoneySpent);

    res.status(200).json({
        success: true,
        project,
        employeeWiseExpenseArray,
        categoryWiseExpenseArray,
        expenses
    });
})
    

const getEmployeeAnalyticsController = asyncHandler(async (req, res) => {

    const project_id = req.params.project_id;
    const employee_id = req.employee._id;
    let project = await Project.findById(project_id).populate('employees', 'firstName lastName email').populate('manager_id', 'firstName lastName email');

    project.employees.sort((a, b) => {
        if (a.firstName < b.firstName)
        {
            return -1;
        }
        else if (a.firstName > b.firstName)
        {
            return 1;
        }
        else
        {
            if (a.lastName < b.lastName)
            {
                return -1;
            }
            else if (a.lastName > b.lastName)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
    });

    const expenses = await Expense.find({project_id, employee_id}).populate('employee_id', 'firstName lastName').sort({date: 1});

    const categoryWiseExpenseArray = [];

    for (let i = 0; i < expenses.length; i++)
    {
        const expense = expenses[i];
        const category = expense.category;

        if (categoryWiseExpenseArray.find((categoryWiseExpense) => categoryWiseExpense.category == category))
            continue;

        const categoryExpenses = await Expense.find({project_id, employee_id, category, status: 'Approved'});
        const categoryTotalMoneySpent = categoryExpenses.reduce((total, expense) => total + expense.amount, 0);

        if (categoryTotalMoneySpent == 0)
            continue;

        categoryWiseExpenseArray.push({
            category,
            categoryTotalMoneySpent
        });
    }

    categoryWiseExpenseArray.sort((a, b) => b.categoryTotalMoneySpent - a.categoryTotalMoneySpent);

    res.status(200).json({
        success: true,
        project,
        categoryWiseExpenseArray,
        expenses
    });

})


module.exports = {
    getManagerDashboardController,
    getEmployeeDashboardController,
    getExpenseContibutionController,
    getManagerAnalyticsController,
    getEmployeeAnalyticsController
};