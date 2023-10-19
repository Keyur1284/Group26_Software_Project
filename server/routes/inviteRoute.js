const express = require("express");
const router = express.Router();
const {
    sendInviteController,
    getInvitesController,
    acceptInviteController,
} = require("../controllers/inviteController");

const {
  managerAuthMiddleware,
  employeeAuthMiddleware,
} = require("../middlewares/authMiddleware");


router.post("/send-invite/:project_id", managerAuthMiddleware, sendInviteController);
router.get("/view-invites", employeeAuthMiddleware, getInvitesController);
router.post("/accept-invite", employeeAuthMiddleware, acceptInviteController);

module.exports = router;