const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const {errorHandler, notFound} = require('./middlewares/errorMiddleware');
const connectDB = require('./config/connection');
const employeeRoutes = require('./routes/employeeRoute');
const managerRoutes = require('./routes/managerRoute');
const projectRoutes = require('./routes/projectRoute');
const expenseRoutes = require('./routes/expenseRoute');
const inviteRoutes = require('./routes/inviteRoute');
const notificationRoutes = require('./routes/notificationRoute');
const announcementRoutes = require('./routes/announcementRoute');
const statisticRoutes = require('./routes/statisticRoute');

dotenv.config({path: 'config.env'});
const app = express();
connectDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 8000;

app.use('/api/employees', employeeRoutes);
app.use('/api/managers', managerRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/invites', inviteRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/statistics', statisticRoutes);

app.use(notFound)
app.use(errorHandler);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`.yellow.bold)});