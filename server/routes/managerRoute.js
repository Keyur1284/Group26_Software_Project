const express = require('express');
const router = express.Router();
const {loginController, registerController, findEmployeesController, createProjectController, sendInviteController} = require('../controllers/managerController');
const {managerAuthMiddleware} = require('../middlewares/authMiddleware');

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/find-employees', managerAuthMiddleware, findEmployeesController);
router.post('/create-project', managerAuthMiddleware, createProjectController);
router.post('/send-invite', managerAuthMiddleware, sendInviteController);

module.exports = router;