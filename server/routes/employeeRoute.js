const express = require('express');
const router = express.Router();
const {loginController, registerController, getInvitesController, acceptInviteController} = require('../controllers/employeeController');
const {employeeAuthMiddleware} = require('../middlewares/authMiddleware');

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/get-invites', employeeAuthMiddleware, getInvitesController);
router.post('/accept-invite', employeeAuthMiddleware, acceptInviteController);

module.exports = router;