import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { projectService } from "./projectService";

const initialState = {
    projects: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    appErr: undefined,
    serverErr: undefined
}


export const createProject = createAsyncThunk('/project/createProject', async (projectData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await projectService.createProject(projectData, token);
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


export const getProjectsManager = createAsyncThunk('/project/getProjectsManager', async (_, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await projectService.getProjectsManager(token);
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


export const getProjectsEmployee = createAsyncThunk('/project/getProjectsEmployee', async (_, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token;
        const response = await projectService.getProjectsEmployee(token);
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


const projectSlice = createSlice({
    name: "project",
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

        .addCase(createProject.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(createProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.projects.push(action.payload.project);
            state.message = action.payload.message;
        })

        .addCase(createProject.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.appErr = action.payload?.message;
            state.serverErr = action.error?.message;
        })

        .addCase(getProjectsManager.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(getProjectsManager.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.projects = action.payload.projects;
        })

        .addCase(getProjectsManager.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.appErr = action.payload?.message;
            state.serverErr = action.error?.message;
        })

        .addCase(getProjectsEmployee.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(getProjectsEmployee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.projects = action.payload.projects;
        })

        .addCase(getProjectsEmployee.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.appErr = action.payload?.message;
            state.serverErr = action.error?.message;
        })
    }
})


export const { reset } = projectSlice.actions;
export default projectSlice.reducer;