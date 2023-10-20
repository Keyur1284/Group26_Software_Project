const express = require("express");
const router = express.Router();
const {
    viewNotificationEmployeeController,
    viewNotificationManagerController,
    deleteNotificationEmployeeController,
    deleteNotificationManagerController
} = require("../controllers/notificationController");

const { employeeAuthMiddleware, managerAuthMiddleware } = require("../middlewares/authMiddleware");

router.get("/notification-employee", employeeAuthMiddleware, viewNotificationEmployeeController);
router.get("/notification-manager", managerAuthMiddleware, viewNotificationManagerController);
router.delete("/delete-notification-employee/:notification_id", employeeAuthMiddleware, deleteNotificationEmployeeController);
router.delete("/delete-notification-manager/:notification_id", managerAuthMiddleware, deleteNotificationManagerController);

module.exports = router;
