import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { teamService } from "./teamService";

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    appErr: undefined,
    serverErr: undefined,
    manager: "",
    employees: [],
}


export const getMembers = createAsyncThunk("team/getMembers", async (projectId, thunkAPI) => {

    try {
        const response = await teamService.getMembers(projectId);
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


const teamSlice = createSlice({
    name: "team",
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
        clearTeam: (state) => {
            state.manager = "";
            state.employees = [];
        }
    },
    extraReducers: (builder) => {

        builder
            
            .addCase(getMembers.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getMembers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.manager = action.payload.manager;
                state.employees = action.payload.employees;
            })
            
            .addCase(getMembers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })
    }   
})


export const { reset, clearTeam } = teamSlice.actions;
export default teamSlice.reducer;