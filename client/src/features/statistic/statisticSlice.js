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
    employeeWiseExpenseArray: []
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

    }
})


export const { reset, clearStatistics } = statisticSlice.actions;
export default statisticSlice.reducer;