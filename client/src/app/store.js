import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import projectReducer from '../features/project/projectSlice'
import announcementReducer from '../features/announcement/announcementSlice';
import teamReducer from '../features/team/teamSlice';
import inviteReducer from '../features/invite/inviteSlice';
import expenseReducer from '../features/expense/expenseSlice';
import notificationReducer from '../features/notification/notificationSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
        announcement: announcementReducer,
        team: teamReducer,
        invite: inviteReducer,
        expense: expenseReducer,
        notification: notificationReducer
    }
})