import { baseURL } from "../../utils/baseURL";
import axios from "axios";

const getProjectsManager = async (token) => {
    
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/projects/projects-manager`, config);
    return response.data;
}

const getManagerDashboard = async (projectId, token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/statistics/manager-dashboard/${projectId}`, config);
    return response.data;
}

export const statisticService = { getManagerDashboard }