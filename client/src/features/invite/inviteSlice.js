import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { inviteService } from "./inviteService";

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    result: "",
    appErr: undefined,
    serverErr: undefined,
    employees: [],
    invitations: [],
}


export const getEmployees = createAsyncThunk("invite/getEmployees", async (_, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await inviteService.getEmployees(token);
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


export const sendInvite = createAsyncThunk("invite/sendInvite", async (inviteData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await inviteService.sendInvite(inviteData, token);
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


export const getInvites = createAsyncThunk("invite/getInvites", async (_, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await inviteService.getInvites(token);
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


export const acceptInvite = createAsyncThunk("invite/acceptInvite", async (inviteId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await inviteService.acceptInvite(inviteId, token);
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


const inviteSlice = createSlice({
    name: "invite",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.result = "";
            state.appErr = "";
            state.serverErr = "";
        },
        clearEmployeesAndInvitations: (state) => {
            state.employees = [];
            state.invitations = [];
        }
    },
    extraReducers: (builder) => {

        builder
            
        .addCase(getEmployees.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(getEmployees.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.manager = action.payload.manager;
            state.employees = action.payload.employees;
        })
        
        .addCase(getEmployees.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.appErr = action.payload?.message;
            state.serverErr = action.error?.message;
        })

        .addCase(sendInvite.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(sendInvite.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.result = action.payload.message;
        })

        .addCase(sendInvite.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.appErr = action.payload?.message;
            state.serverErr = action.error?.message;
        })

        .addCase(getInvites.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(getInvites.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.invitations = action.payload.invitations;
        })

        .addCase(getInvites.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.appErr = action.payload?.message;
            state.serverErr = action.error?.message;
        })

        .addCase(acceptInvite.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(acceptInvite.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.result = action.payload.message;
        })

        .addCase(acceptInvite.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.appErr = action.payload?.message;
            state.serverErr = action.error?.message;
        })
    }   
})


export const { reset, clearEmployeesAndInvitations } = inviteSlice.actions;
export default inviteSlice.reducer; 