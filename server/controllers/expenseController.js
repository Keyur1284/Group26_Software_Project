const Expense = require('../models/expenseModel');
const asyncHandler = require('express-async-handler');


const addExpenseController = asyncHandler(async (req, res) => {

    const {name, date, category, amount, description, file} = req.body;
    const project_id = req.params.id;
    const employee_id = req.employee._id;


    if(!name || !date || !category || !amount || !project_id || !file)
    {
        res.status(400)
        // res.json({success: false, message: 'Please fill all the fields'});
        throw new Error('Please fill all the fields');
    }

    if (amount <= 0)
    {
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
    
    if (year > currentYear)
    {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }
    
    if (year === currentYear && month > currentMonth)
    {
        res.status(400)
        throw new Error('Date must be less than or equal to current date');
    }
    
    if (year === currentYear && month === currentMonth && day > currentDay)
    {
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
        file
    });

    if(expense){
        res.status(200).json({
            success: true,
            expense
        });
    }

    else{
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }

});


module.exports = {
    addExpenseController
};