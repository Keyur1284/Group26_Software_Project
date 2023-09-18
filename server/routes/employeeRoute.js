const express = require('express');
const router = express.Router();
const {loginController, registerController} = require('../controllers/employeeController');

router.post('/register', registerController);
router.post('/login', loginController);

module.exports = router;