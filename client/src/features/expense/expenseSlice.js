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
    }
})


export const { reset } = announcementSlice.actions;
export default announcementSlice.reducer;