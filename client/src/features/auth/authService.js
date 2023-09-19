import { baseURL } from "../../utils/baseURL";
import axios from "axios";

const registerEmployee = async (userData) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    
    const response = await axios.post(`${baseURL}/employees/register`, userData, config);
    return response.data;
}

const loginEmployee = async (userData) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await axios.post(`${baseURL}/employees/login`, userData, config);

    if (response.data)
    {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}

const logout = async () => {
    localStorage.removeItem("user");
}

export const authService = {registerEmployee, loginEmployee, logout}