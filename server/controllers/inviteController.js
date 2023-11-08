const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');
const Project = require('../models/projectModel');
const Invite = require('../models/inviteModel');
const EmployeeNotification = require('../models/employeeNotificationModel');
const ManagerNotification = require('../models/managerNotificationModel');
const asyncHandler = require('express-async-handler');


const sendInviteController = asyncHandler(async (req, res) => {

    const {employees} = req.body;
    const project_id = req.params.project_id;
    const manager_id =  req.manager._id;
    const manager = await Manager.findById(manager_id);
    const project = await Project.findById(project_id);
    const invitations = [];

    for (let i = 0; i < employees.length; i++)
    {
        const employee_id = employees[i]._id;
        const employee = await Employee.findById(employee_id);
    
        if (!employee || !manager || !project)
        {
            res.status(400)
            // res.json({success: false, message: 'Invalid data'});
            throw new Error('Invalid data');
        }

        const employeeProjects = employee.projects;
        const projectExists = employeeProjects.includes(project_id);

        if (projectExists)
        {
            res.status(400)
            // res.json({success: false, message: 'Employee is already present in the project!'});
            throw new Error(`Employee ${employee.firstName + " " + employee.lastName} is already present in the project!`);
        }

        const invite = await Invite.create({
            employee_id,
            project_id,
            manager_id
        });

        const employeeNotification = await EmployeeNotification.create({
            employee_id,
            project_id,
            invite_id: invite._id,
            message: `${manager.firstName + " " + manager.lastName} has invited you to join ${project.name} project!`
        });

        const managerNotification = await ManagerNotification.create({
            manager_id,
            project_id,
            message: `${employee.firstName + " " + employee.lastName} has been invited to join ${project.name} project!`
        });

        if (invite)
        {
            invitations.push(invite);
        }
    }

    if (invitations.length > 0)
    {
        res.status(200).json({
            success: true,
            message: "Invitations sent successfully!",
            invitations
        });
    }

    else
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid data'});
        throw new Error('Invalid data');
    }
})


const getInvitesController = asyncHandler(async (req, res) => {
   
    const employee_id = req.employee._id;
    let invitations = await Invite.find({employee_id}).populate('project_id', 'name').populate('manager_id', 'firstName lastName');
    
    const project_ids = [];
    const uniqueInvites = [];

    invitations.forEach(invite => {
        if (!project_ids.find((project_id) => (String(invite.project_id) === String(project_id))))
        {
            project_ids.push(invite.project_id);
            uniqueInvites.push(invite);
        }
    });

    invitations = uniqueInvites;

    res.status(200).json({
        success: true,
        invitations
    });
});


const acceptInviteController = asyncHandler(async (req, res) => {

    const {inviteId} = req.body;
    const employee_id = req.employee._id;
    const invite = await Invite.findById(inviteId);
    const project = await Project.findById(invite.project_id);

    if (invite && project)
    {
        const employee = await Employee.findById(employee_id);
        
        employee.projects.push(project._id);
        await employee.save();
        
        project.employees.push(employee._id);
        await project.save();
        
        await Invite.deleteMany({project_id: invite.project_id , employee_id: invite.employee_id});
        await EmployeeNotification.deleteMany({project_id: invite.project_id , employee_id: invite.employee_id});

        const managerNotification = await ManagerNotification.create({
            manager_id: invite.manager_id,
            project_id: invite.project_id,
            message: `${employee.firstName + " " + employee.lastName} has accepted your invitation to join ${project.name} project!`
        });
        
        res.status(200).json({
            success: true,
            employee,
            project,
            message: "Invite accepted successfully!"
        });
    }

    else
    {
        res.status(400)
        // res.json({success: false, message: 'Invalid invite'});
        throw new Error('Invalid invite');
    }
})


module.exports = {
    sendInviteController,
    getInvitesController,
    acceptInviteController
};