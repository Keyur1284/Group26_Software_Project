const express = require("express");
const router = express.Router();
const {
    findEmployeesController,
    createProjectController,
    editProjectController,
    getProjectsEmployeeController,
    getProjectsManagerController,
    getMembersController
} = require("../controllers/projectController");

const {
  managerAuthMiddleware,
  employeeAuthMiddleware,
} = require("../middlewares/authMiddleware");


router.get("/find-employees", managerAuthMiddleware, findEmployeesController);
router.post("/create-project", managerAuthMiddleware, createProjectController);
router.patch("/edit-project/:project_id", managerAuthMiddleware, editProjectController);
router.get("/projects-employee", employeeAuthMiddleware, getProjectsEmployeeController);
router.get("/projects-manager", managerAuthMiddleware, getProjectsManagerController);
router.get("/get-members/:project_id", getMembersController);

module.exports = router;