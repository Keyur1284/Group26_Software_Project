const express = require('express');
const router = express.Router();
const {loginController, registerController, getEmployeeProfileController} = require('../controllers/employeeController');
const {employeeAuthMiddleware} = require('../middlewares/authMiddleware');

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/profile', employeeAuthMiddleware, getEmployeeProfileController);


module.exports = router;