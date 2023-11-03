const express = require("express");
const router = express.Router();
const {
    getManagerDashboardController
} = require("../controllers/statisticController");

const {
  managerAuthMiddleware,
  employeeAuthMiddleware,
} = require("../middlewares/authMiddleware");

router.get("/manager-dashboard/:project_id", managerAuthMiddleware, getManagerDashboardController);

module.exports = router;