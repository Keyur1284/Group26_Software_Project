const express = require('express');
const router = express.Router();
const {loginController, registerController, getEmployeeProfileController, forgotPasswordController, verifyIdAndTokenController, resetPasswordController} = require('../controllers/employeeController');
const {employeeAuthMiddleware} = require('../middlewares/authMiddleware');

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/profile', employeeAuthMiddleware, getEmployeeProfileController);
router.post('/forgot-password', forgotPasswordController);
router.get('/reset-password/:id/:token', verifyIdAndTokenController);
router.post('/reset-password/:id/:token', resetPasswordController);


module.exports = router;