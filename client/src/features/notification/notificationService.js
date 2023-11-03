import { baseURL } from "../../utils/baseURL";
import axios from "axios";


const getEmployeeNotifications = async (token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/notifications/notification-employee`, config);
    return response.data;
}

const getManagerNotifications = async (token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/notifications/notification-manager`, config);
    return response.data;
}

const deleteNotificationManager = async (notificationId, token) => {
    
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(`${baseURL}/notifications/delete-notification-manager/${notificationId}`, config);
    return response.data;

}

const deleteNotificationEmployee = async (notificationId, token) => {
    
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(`${baseURL}/notifications/delete-notification-employee/${notificationId}`, config);
    return response.data;

}
export const notificationService = { getEmployeeNotifications, getManagerNotifications, deleteNotificationManager, deleteNotificationEmployee }