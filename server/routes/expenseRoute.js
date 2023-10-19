const express = require('express');
const router = express.Router();
const { addExpenseController} = require('../controllers/expenseController');
const {employeeAuthMiddleware} = require('../middlewares/authMiddleware');

router.post('/add-expense/:id', employeeAuthMiddleware, addExpenseController);

module.exports = router;