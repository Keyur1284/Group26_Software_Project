const express = require('express');
const router = express.Router();
const {findEmployeesController, createProjectController, sendInviteController} = require('../controllers/projectController');
const {managerAuthMiddleware} = require('../middlewares/authMiddleware');

router.get('/find-employees', managerAuthMiddleware, findEmployeesController);
router.post('/create-project', managerAuthMiddleware, createProjectController);
router.post('/send-invite', managerAuthMiddleware, sendInviteController);

module.exports = router;