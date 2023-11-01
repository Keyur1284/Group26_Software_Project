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


export const expenseService = { createExpense }