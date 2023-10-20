const employeeNotification = require('../models/employeeNotificationModel');
const managerNotification = require('../models/managerNotificationModel');
const asyncHandler = require('express-async-handler');


const viewNotificationEmployeeController = asyncHandler(async (req, res) => {

    const employee_id = req.employee._id;
    const notifications = await employeeNotification.find({ employee_id }).sort({ createdAt: -1 });
    res.json({ success: true, notifications });

});


const viewNotificationManagerController = asyncHandler(async (req, res) => {

    const manager_id = req.manager._id;
    const notifications = await managerNotification.find({ manager_id }).sort({ createdAt: -1 });
    res.json({ success: true, notifications });

});


const deleteNotificationEmployeeController = asyncHandler(async (req, res) => {

    const notification_id = req.params.notification_id;
    const deletedNotification = await employeeNotification.findByIdAndDelete(notification_id);

    if (deletedNotification) {
        res.status(200).json({
            success: true,
            deletedNotification
        });
    }

    else {
        res.status(404);
        throw new Error("Notification not found!");
    }
});


const deleteNotificationManagerController = asyncHandler(async (req, res) => {

    const notification_id = req.params.notification_id;
    const deletedNotification = await managerNotification.findByIdAndDelete(notification_id);

    if (deletedNotification) {
        res.status(200).json({
            success: true,
            deletedNotification
        });
    }

    else {
        res.status(404);
        throw new Error("Notification not found!");
    }
});


module.exports = {
    viewNotificationEmployeeController,
    viewNotificationManagerController,
    deleteNotificationEmployeeController,
    deleteNotificationManagerController
}