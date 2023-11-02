import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { notificationService } from "./notificationService";
import e from "cors";

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    appErr: undefined,
    serverErr: undefined,
    notifications: [],
}


export const getEmployeeNotifications = createAsyncThunk("notification/getEmployeeNotifications", async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await notificationService.getEmployeeNotifications(token);
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


export const getManagerNotifications = createAsyncThunk("notification/getManagerNotifications", async (_, thunkAPI) => {
    
    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await notificationService.getManagerNotifications(token);
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


const notificationSlice = createSlice({
    name: "notification",
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
        clearNotification: (state) => {
            state.notifications = [];
        }
    },
    extraReducers: (builder) => {

        builder
            
            .addCase(getEmployeeNotifications.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getEmployeeNotifications.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.notifications = action.payload.notifications;
            })

            .addCase(getEmployeeNotifications.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(getManagerNotifications.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getManagerNotifications.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.notifications = action.payload.notifications;
            })

            .addCase(getManagerNotifications.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })
           
    }
})


export const { reset, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;