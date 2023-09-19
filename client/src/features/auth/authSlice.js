import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user ? user : null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    appErr: undefined,
    serverErr: undefined
}

export const registerEmployee = createAsyncThunk('/auth/registerEmployee', async (userData, thunkAPI) => {

    try {
        const response = await authService.registerEmployee(userData);
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

export const loginEmployee = createAsyncThunk('/auth/loginEmployee', async (userData, thunkAPI) => {

    try {
        const response = await authService.loginEmployee(userData);
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

export const logout = createAsyncThunk('/auth/logout', async () => {
   await authService.logout()
})


const authSlice = createSlice({
    name: "auth",
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
            
            .addCase(registerEmployee.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(registerEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload?.message;
            })

            .addCase(registerEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(loginEmployee.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(loginEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = action.payload?.message;
            })

            .addCase(loginEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = null;
                state.message = "User Logged Out Successfully";
            })
    }
})


export const { reset } = authSlice.actions;
export default authSlice.reducer;