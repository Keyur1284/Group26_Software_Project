import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { statisticService } from "./statisticService";

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    appErr: undefined,
    serverErr: undefined,
    project: {},
    approvedExpensesCount: 0,
    pendingExpensesCount: 0,
    totalMoneySpent: 0,
    employeeWiseExpenseArray: [],
    categoryWiseExpenseArray: [],
    expenses: [],
    employeeExpenses: 0,
    contribution: 0
}


export const getManagerDashboard = createAsyncThunk('/statistic/getManagerDashboard', async (projectId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await statisticService.getManagerDashboard(projectId, token);
        return response;
    }
    
    catch (error) {
                
        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);
    }   

})


export const getEmployeeDashboard = createAsyncThunk('/statistic/getEmployeeDashboard', async (projectId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await statisticService.getEmployeeDashboard(projectId, token);
        return response;
    }

    catch (error) {

        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);
    }

})


export const getExpenseContribution = createAsyncThunk('/statistic/getExpenseContribution', async (expenseId, thunkAPI) => {

    try {
        const response = await statisticService.getExpenseContribution(expenseId);
        return response;
    }

    catch (error) {

        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);
    }

})


export const getManagerAnalytics = createAsyncThunk('/statistic/getManagerAnalytics', async (projectId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await statisticService.getManagerAnalytics(projectId, token);
        return response;
    }

    catch (error) {

        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);
    }

})


export const getEmployeeAnalytics = createAsyncThunk('/statistic/getEmployeeAnalytics', async (projectId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await statisticService.getEmployeeAnalytics(projectId, token);
        return response;
    }

    catch (error) {

        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);

    }

})

const statisticSlice = createSlice({
    name: "statistic",
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
        clearStatistics: (state) => {
            state.project = {};
            state.approvedExpensesCount = 0;
            state.pendingExpensesCount = 0;
            state.totalMoneySpent = 0;
            state.employeeWiseExpenseArray = [];
            state.categoryWiseExpenseArray = [];
            state.expenses = [];
            state.employeeExpenses = 0;
            state.contribution = 0;
        }
    },
    extraReducers: (builder) => {

        builder

            .addCase(getManagerDashboard.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getManagerDashboard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.project = action.payload.project;
                state.approvedExpensesCount = action.payload.approvedExpensesCount;
                state.pendingExpensesCount = action.payload.pendingExpensesCount;
                state.totalMoneySpent = action.payload.totalMoneySpent;
                state.employeeWiseExpenseArray = action.payload.employeeWiseExpenseArray;
            })

            .addCase(getManagerDashboard.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(getEmployeeDashboard.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getEmployeeDashboard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.project = action.payload.project;
                state.approvedExpensesCount = action.payload.approvedExpensesCount;
                state.pendingExpensesCount = action.payload.pendingExpensesCount;
                state.totalMoneySpent = action.payload.totalMoneySpent;
                state.employeeExpenses = action.payload.employeeExpenses;
            })

            .addCase(getEmployeeDashboard.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(getExpenseContribution.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getExpenseContribution.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.contribution = action.payload.contribution;
                state.totalMoneySpent = action.payload.totalMoneySpent;
            })

            .addCase(getExpenseContribution.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(getManagerAnalytics.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getManagerAnalytics.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.project = action.payload.project;
                state.employeeWiseExpenseArray = action.payload.employeeWiseExpenseArray;
                state.categoryWiseExpenseArray = action.payload.categoryWiseExpenseArray;
                state.expenses = action.payload.expenses;
            })
            
            .addCase(getManagerAnalytics.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(getEmployeeAnalytics.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getEmployeeAnalytics.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.project = action.payload.project;
                state.expenses = action.payload.expenses;
                state.categoryWiseExpenseArray = action.payload.categoryWiseExpenseArray;
            })

            .addCase(getEmployeeAnalytics.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })
    }
})


export const { reset, clearStatistics } = statisticSlice.actions;
export default statisticSlice.reducer;