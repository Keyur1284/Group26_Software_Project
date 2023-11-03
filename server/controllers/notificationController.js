const employeeNotification = require('../models/employeeNotificationModel');
const Employee = require('../models/employeeModel');
const Manager = require('../models/managerModel');
const managerNotification = require('../models/managerNotificationModel');
const asyncHandler = require('express-async-handler');


const viewNotificationEmployeeController = asyncHandler(async (req, res) => {

    const employee_id = req.employee._id;
    let notifications = await employeeNotification.find({ employee_id }).sort({ createdAt: -1 }).populate('project_id', 'name manager_id').populate('expense_id', 'name status');

    notifications = await Promise.all(notifications.map(async (notification) => {

        const manager_id = notification.project_id.manager_id;
        const manager = await Manager.findById(manager_id);

        return {
            ...notification._doc,
            manager: manager.firstName + " " + manager.lastName
        }
    }
    ));

    res.status(200).json({ success: true, notifications });

});


const viewNotificationManagerController = asyncHandler(async (req, res) => {

    const manager_id = req.manager._id;
    let notifications = await managerNotification.find({ manager_id }).sort({ createdAt: -1 }).populate('project_id','name').populate('expense_id', 'employee_id name');

    notifications = await Promise.all(notifications.map(async (notification) => {

        const employee_id = notification.expense_id.employee_id;
        const employee = await Employee.findById(employee_id);

        return {
            ...notification._doc,
            employee: employee.firstName + " " + employee.lastName
        }
    }
    ));

    res.status(200).json({ success: true, notifications });

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