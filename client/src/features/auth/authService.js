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

const registerManager = async (userData) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    
    const response = await axios.post(`${baseURL}/managers/register`, userData, config);
    return response.data;
}

const editEmployeeProfile = async (userData, token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.patch(`${baseURL}/employees/edit-profile`, userData, config);
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

const loginManager = async (userData) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await axios.post(`${baseURL}/managers/login`, userData, config);

    if (response.data)
    {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}


const forgotPasswordEmployee = async (userData) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await axios.post(`${baseURL}/employees/forgot-password`, userData, config);
    return response.data;
}


const forgotPasswordManager = async (userData) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await axios.post(`${baseURL}/managers/forgot-password`, userData, config);
    return response.data;
}


const resetPasswordEmployee = async (userData) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const { resetId } = userData;

    const response = await axios.post(`${baseURL}/employees/reset-password/${resetId}`, userData, config);
    return response.data;
}


const resetPasswordManager = async (userData) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const { resetId } = userData;

    const response = await axios.post(`${baseURL}/managers/reset-password/${resetId}`, userData, config);
    return response.data;
}


const getManagerProfile = async (token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/managers/profile`, config);
    return response.data;

}

const getEmployeeProfile = async (token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/employees/profile`, config);
    return response.data;

}


const editManagerProfile = async (userData, token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.patch(`${baseURL}/managers/edit-profile`, userData, config);

    if (response.data)
    {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}


const logout = async () => {
    localStorage.removeItem("user");
}

export const authService = {
  registerEmployee,
  registerManager,
  loginEmployee,
  loginManager,
  forgotPasswordEmployee,
  forgotPasswordManager,
  resetPasswordEmployee,
  resetPasswordManager,
  getEmployeeProfile,
  editEmployeeProfile,
  getManagerProfile,
  editManagerProfile,
  logout,
};