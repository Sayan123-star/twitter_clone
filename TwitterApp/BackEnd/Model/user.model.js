const mongoose = require("mongoose");
const UserModel = mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    username:{
        type:String,
        required:true,
        unique:[true,"Username already exists"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    picture:{
        type:String
    },
    location:{
        type:String
    },
    dob:{
        type:Date
    },
    followers:[{
        type:mongoose.Schema.ObjectId,
        ref: "User"
    }], 
    following:[{
        type:mongoose.Schema.ObjectId,
        ref: "User"
    }],
},{timestamps:true})

module.exports = mongoose.model('User',UserModel)