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

const getExpenseById = async (expenseId) => {
    
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const response = await axios.get(`${baseURL}/expenses/expense/${expenseId}`, config);
    return response.data;
} 

const updateExpense = async (expenseData, token) => {
    
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const { expenseId } = expenseData;

    const response = await axios.patch(`${baseURL}/expenses/update-expense/${expenseId}`, expenseData, config);
    return response.data;
}

const deleteExpense = async (expenseId, token) => {
    
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(`${baseURL}/expenses/delete-expense/${expenseId}`, config);
    return response.data;
}

const acceptExpense = async (expenseId, token) => {
        
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.patch(`${baseURL}/expenses/accept-expense/${expenseId}`, {}, config);
    return response.data;
}

const rejectExpense = async (expenseId, token) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.patch(`${baseURL}/expenses/reject-expense/${expenseId}`, {}, config);
    return response.data;
}

export const expenseService = { createExpense, getExpenseEmployee, getExpenseManager, updateExpense, deleteExpense, getExpenseById, acceptExpense, rejectExpense }