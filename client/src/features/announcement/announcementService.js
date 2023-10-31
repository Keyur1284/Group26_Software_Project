import { baseURL } from "../../utils/baseURL";
import axios from "axios";

const createAnnouncement = async (announcementData) => {

    const projectId = announcementData.projectId;

    const response = await axios.post(`${baseURL}/announcements/create-announcement/${projectId}`, announcementData);
    return response.data;
}


const getAnnouncements = async (projectId) => {

    const response = await axios.get(`${baseURL}/announcements/get-announcements/${projectId}`);
    return response.data;
}


export const announcementService = { createAnnouncement, getAnnouncements }