import { baseURL } from "../../utils/baseURL";
import axios from "axios";

const createExpense = async (expenseData, token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const { projectId } = expenseData;

    const response = await axios.post(`${baseURL}/expenses/add-expense/${projectId}`, expenseData, config);
    return response.data;
}

const getExpenseEmployee = async (projectId, token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/expenses/expenses-employee/${projectId}`, config);
    return response.data;
}

const getExpenseManager = async (projectId, token) => {
    
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${baseURL}/expenses/expenses-manager/${projectId}`, config);
    return response.data;
}

export const expenseService = { createExpense, getExpenseEmployee, getExpenseManager }