const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');
const Project = require('../models/projectModel');
const Announcement = require('../models/announcementModel');
const asyncHandler = require('express-async-handler');


const createAnnouncementController = asyncHandler(async (req, res) => {
    
    const { message, name } = req.body;
    const project_id = req.params.project_id;

    if (!message)
    {
        res.status(400)
        // res.json({success: false, message: 'Please enter the message'});
        throw new Error('Please enter the message');
    }

    const announcement = await Announcement.create({
        project_id,
        message,
        name
    });

    if (announcement)
    {
        res.status(200).json({
            success: true,
            announcement
        });
    }

    else
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }
})


const getAnnouncementsController = asyncHandler(async (req, res) => {

    const project_id = req.params.project_id;
    const project = await Project.findById(project_id);
    const manager_id = project.manager_id;
    const manager = await Manager.findById(manager_id);

    const announcements = await Announcement.find({project_id});

    if (announcements)
    {
        res.status(200).json({
            success: true,
            announcements,
            projectName: project.name,
            managerName: manager.firstName + ' ' + manager.lastName
        });
    }
})


module.exports = {
    createAnnouncementController,
    getAnnouncementsController
};