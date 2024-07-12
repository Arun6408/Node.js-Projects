const mongoose = require("mongoose");

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is Must'],
        trim:true,
        maxlength:[20,'Maxlength cant exceed 20']
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports=mongoose.model('Task',taskSchema);