const express = require("express");
const router = express.Router();
const {
    findEmployeesController,
    createProjectController,
    sendInviteController,
    getInvitesController,
    acceptInviteController,
    getProjectsEmployeeController,
    getProjectsManagerController,
} = require("../controllers/projectController");

const {
  managerAuthMiddleware,
  employeeAuthMiddleware,
} = require("../middlewares/authMiddleware");


router.get("/find-employees", managerAuthMiddleware, findEmployeesController);
router.post("/create-project", managerAuthMiddleware, createProjectController);
router.post("/send-invite", managerAuthMiddleware, sendInviteController);
router.get("/invites", employeeAuthMiddleware, getInvitesController);
router.post("/accept-invite", employeeAuthMiddleware, acceptInviteController);
router.get("/projects-employee", employeeAuthMiddleware, getProjectsEmployeeController);
router.get("/projects-manager", managerAuthMiddleware, getProjectsManagerController);

module.exports = router;