const express = require("express");
const router = express.Router();
const {
    findEmployeesController,
    createProjectController,
    getProjectsEmployeeController,
    getProjectsManagerController,
} = require("../controllers/projectController");

const {
  managerAuthMiddleware,
  employeeAuthMiddleware,
} = require("../middlewares/authMiddleware");


router.get("/find-employees", managerAuthMiddleware, findEmployeesController);
router.post("/create-project", managerAuthMiddleware, createProjectController);
router.get("/projects-employee", employeeAuthMiddleware, getProjectsEmployeeController);
router.get("/projects-manager", managerAuthMiddleware, getProjectsManagerController);

module.exports = router;