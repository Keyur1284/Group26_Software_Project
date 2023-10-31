import { baseURL } from "../../utils/baseURL";
import axios from "axios";

const createProject = async (projectData, token) => {
    
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
    
        const response = await axios.post(`${baseURL}/projects/create-project`, projectData, config);
        return response.data;
}

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

export const projectService = { createProject, getProjectsManager }