const express = require('express');
const router = express.Router();
const {loginController, registerController, addExpenseController} = require('../controllers/employeeController');
const {employeeAuthMiddleware} = require('../middlewares/authMiddleware');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/add-expense', employeeAuthMiddleware, addExpenseController);


module.exports = router;