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

export const registerManager = createAsyncThunk('/auth/registerManager', async (userData, thunkAPI) => {

    try {
        const response = await authService.registerManager(userData);
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

export const loginManager = createAsyncThunk('/auth/loginManager', async (userData, thunkAPI) => {

    try {
        const response = await authService.loginManager(userData);
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


export const getManagerProfile = createAsyncThunk('/auth/getManagerProfile', async (_, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token;
    const response = await authService.getManagerProfile(token);
    return response;

});


export const getEmployeeProfile = createAsyncThunk('/auth/getEmployeeProfile', async (_, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token;
    const response = await authService.getEmployeeProfile(token);
    return response;

});


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

            .addCase(registerManager.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(registerEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload?.message;
            })

            .addCase(registerManager.fulfilled, (state, action) => {
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

            .addCase(registerManager.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(loginEmployee.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(loginManager.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(loginEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = action.payload?.message;
            })

            .addCase(loginManager.fulfilled, (state, action) => {
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

            .addCase(loginManager.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.message = "User Logged Out Successfully";
            })

            .addCase(getManagerProfile.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getManagerProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.profile = action.payload.manager;
            })

            .addCase(getManagerProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(getEmployeeProfile.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getEmployeeProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.profile = action.payload.employee;
            })

            .addCase(getEmployeeProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

    }
})


export const { reset } = authSlice.actions;
export default authSlice.reducer;