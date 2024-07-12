const mongoose=require("mongoose");

const jobSchema=mongoose.Schema({
    company:{
        type:String,
        required:[true,"Company is Required"],
        maxLength:50
    },
    position:{
        type:String,
        required:[true,"Position is Required"],
        maxLength:50
    },
    status:{
        type:String,
        enum:['pending','interview','declined'],
        default:'pending',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please Provide User']
    }
},{timestamps:true});

module.exports=mongoose.model('Job',jobSchema)