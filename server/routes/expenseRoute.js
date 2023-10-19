const express = require('express');
const router = express.Router();
const {addExpenseController, updateExpenseController} = require('../controllers/expenseController');
const {employeeAuthMiddleware} = require('../middlewares/authMiddleware');

router.post('/add-expense/:project_id', employeeAuthMiddleware, addExpenseController);
router.patch('/update-expense/:expense_id', employeeAuthMiddleware, updateExpenseController);

module.exports = router;