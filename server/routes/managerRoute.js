const express = require('express');
const router = express.Router();
const { loginController, registerController, getManagerProfileController, forgotPasswordController,verifyIdAndTokenController, resetPasswordController } = require('../controllers/managerController');
const { managerAuthMiddleware } = require('../middlewares/authMiddleware');

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/profile', managerAuthMiddleware, getManagerProfileController);
router.post('/forgot-password', forgotPasswordController);
router.get('/reset-password/:id/:token', verifyIdAndTokenController);
router.post('/reset-password/:id/:token', resetPasswordController);

module.exports = router;