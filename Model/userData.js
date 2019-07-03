const mongoose = require('mongoose');

var userSchema = mongoose.Schema;
var userDataSchema = new userSchema({
    name:{
        fName :{type:String, required:true},
        mName:{type:String},
        lName:{type:String,required:true}
    },
    email_id:{type:String,required:true,unique:true},
    contactNo:{type:String,required:true},
    DOB:{type:Date},
    gender:{type:String},
    password:{type:String,required:true}
});

module.exports = mongoose.model('userInfo',userDataSchema);