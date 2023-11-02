import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { expenseService } from "./expenseService";

const initialState = {
    expenses: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    appErr: undefined,
    serverErr: undefined
}

export const createExpense = createAsyncThunk("expense/createExpense", async (expenseData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await expenseService.createExpense(expenseData, token);
        return response;
    }
    catch (error) {
            
        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);
        }

});


export const getExpenseEmployee = createAsyncThunk("expense/getExpenseEmployee", async (projectId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await expenseService.getExpenseEmployee(projectId, token);
        return response;
    }
    catch (error) {

        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const getExpenseManager = createAsyncThunk("expense/getExpenseManager", async (projectId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await expenseService.getExpenseManager(projectId, token);
        return response;
    }
    catch (error) {
        
        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const updateExpense = createAsyncThunk("expense/updatedExpense", async (expenseData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await expenseService.updateExpense(expenseData, token);
        return response;
    }
    catch (error) {

        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);
    }
});


const announcementSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = "";
            state.appErr = "";
            state.serverErr = "";
        },
        clearExpenses: (state) => {
            state.expenses = [];
        }
    },
    extraReducers: (builder) => {

        builder

            .addCase(createExpense.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(createExpense.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.expenses = [action.payload.expense, ...state.expenses];
                state.message = action.payload.message;
            })

            .addCase(createExpense.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(getExpenseEmployee.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getExpenseEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.expenses = action.payload.expenses;
            })

            .addCase(getExpenseEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(getExpenseManager.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getExpenseManager.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.expenses = action.payload.expenses;
            })

            .addCase(getExpenseManager.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(updateExpense.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(updateExpense.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.expenses = state.expenses.map((expense) => expense._id === action.payload.updatedExpense._id ? action.payload.updatedExpense : expense);
            })

            .addCase(updateExpense.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })
    }
})


export const { reset, clearExpenses } = announcementSlice.actions;
export default announcementSlice.reducer;