const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const {errorHandler} = require('./middlewares/errorMiddleware');
const connectDB = require('./config/connection');
const employeeRoutes = require('./routes/employeeRoute');

dotenv.config({path: 'config.env'});
const app = express();
connectDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 8000;

app.use('/api/employees', employeeRoutes);

app.use(errorHandler);
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`.yellow.bold)});