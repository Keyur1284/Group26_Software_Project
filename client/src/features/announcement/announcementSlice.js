import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { announcementService } from "./announcementService";

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    result: "",
    appErr: undefined,
    serverErr: undefined,
    announcements: [],
}


export const createAnnouncement = createAsyncThunk("announcement/createAnnouncement", async (announcementData, thunkAPI) => {
    try {
        const response = await announcementService.createAnnouncement(announcementData);
        return response;
    }
    catch (error) {

        if (!error.response)
        {
            throw error;
        }

        return thunkAPI.rejectWithValue(error.response.data);
    }
    }
)

export const getAnnouncements = createAsyncThunk("announcement/getAnnouncements", async (projectId, thunkAPI) => {
        try {
            const response = await announcementService.getAnnouncements(projectId);
            return response;
        }
        catch (error) {

            if (!error.response)
            {
                throw error;
            }

            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)


const announcementSlice = createSlice({
    name: "announcement",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = "";
            state.result = "";
            state.appErr = "";
            state.serverErr = "";
        },
        clearAnnouncements: (state) => {
            state.announcements = [];
            state.project = null;
        }
    },
    extraReducers: (builder) => {

        builder
            
            .addCase(createAnnouncement.pending, (state) => {
                state.isLoading = true;
            })
            
            .addCase(createAnnouncement.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.announcements = [action.payload.announcement, ...state.announcements];
                state.result = action.payload.message;
            })

            .addCase(createAnnouncement.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })

            .addCase(getAnnouncements.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getAnnouncements.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.announcements = action.payload.announcements;
                state.project = action.payload.project;
                state.projectName = action.payload.projectName;
                state.managerName = action.payload.managerName;
                state.message = action.payload.message;
            })

            .addCase(getAnnouncements.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.appErr = action.payload?.message;
                state.serverErr = action.error?.message;
            })
    }
})


export const { reset, clearAnnouncements } = announcementSlice.actions;
export default announcementSlice.reducer;