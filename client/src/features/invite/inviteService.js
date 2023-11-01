import { baseURL } from "../../utils/baseURL";
import axios from "axios";

const getEmployees = async (token) => {
    
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/projects/find-employees`, config);
    return response.data;
}

const sendInvite = async (inviteData, token) => {

    const projectId = inviteData.projectId;

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(`${baseURL}/invites/send-invite/${projectId}`, inviteData, config);
    return response.data;
}

const getInvites = async (token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/invites/view-invites`, config);
    return response.data;
}

const acceptInvite = async (inviteId, token) => {
    
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
    
        const response = await axios.post(`${baseURL}/invites/accept-invite/`, inviteId, config);
        return response.data;
}


export const inviteService = { getEmployees, sendInvite, getInvites, acceptInvite};