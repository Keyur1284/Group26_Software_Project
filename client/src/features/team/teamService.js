import { baseURL } from "../../utils/baseURL";
import axios from "axios";

const getMembers = async (projectId) => {
    
    const response = await axios.get(`${baseURL}/projects/get-members/${projectId}`);
    return response.data;
}

export const teamService = { getMembers };