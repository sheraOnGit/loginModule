const express = require('express');
const path = require('path');

var router = express.Router();

router.get('/userPortal/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','Views','userLogin.html'));
});

module.exports=router;