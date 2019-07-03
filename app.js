const express = require('express');
const path =require('path');
const mongoose = require('mongoose');

var userRouter =  require('./Routes/userRoute.js');

const app = express();

app.use(express.static(path.join(__dirname, 'Public')));

//login router
app.use(userRouter);

app.listen(3000);

