const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

//routes
const roomTypeRoutes = require('./src/routes/roomtype');

//environment variable or you can say constants
env.config();

// mongodb connection
mongoose.connect(
    ' mongodb+srv://xuemoua:Xuemoua@1995@cluster0.6onih.mongodb.net/test_db?retryWrites=true&w=majority',{
    // 'mongodb+srv://' + process.env.MONGO_ATALS_USER + ':' + process.env.MONGO_ATALS_PW + '@cluster0.pak86.mongodb.net/'+ process.env.MONGO_ATALS_DB +'?retryWrites=true&w=majority', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database connected');
});

app.use(cors());
app.use(express.json());
app.use('/api/2020/room-types', roomTypeRoutes);

app.use((req, res, next) =>{
    const error = new Error(NOT_FOUND);
    error.status = 400;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});