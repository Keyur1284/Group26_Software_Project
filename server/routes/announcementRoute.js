const express = require("express");
const router = express.Router();
const {
    createAnnouncementController,
    getAnnouncementsController,
} = require("../controllers/announcementController");

router.post("/create-announcement/:project_id", createAnnouncementController);
router.get("/get-announcements/:project_id", getAnnouncementsController);

module.exports = router;