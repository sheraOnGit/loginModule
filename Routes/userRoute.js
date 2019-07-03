const express = require('express');
const path = require('path');

var router = express.Router();

router.get('/userPortal/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','Views','userLogin.html'));
});

router.get('/uesrPortal/signUp',(req,res,next)=>{
    res.sendFile();
});

router.post('userPortal/signUp',(req,res,next)=>{
    
});

router.get('/userPortal/dashboard',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','Views','dashboard.html'));
});
module.exports=router;