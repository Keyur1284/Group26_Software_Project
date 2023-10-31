const express = require('express');
const router = express.Router();
const {loginController, registerController, getManagerProfileController} = require('../controllers/managerController');
const {managerAuthMiddleware} = require('../middlewares/authMiddleware');

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/profile', managerAuthMiddleware, getManagerProfileController);

module.exports = router;