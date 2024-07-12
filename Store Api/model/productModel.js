const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is a Required Feild']
    },
    price:{
        type:Number,
        required:[true,'price is a Required Feild']
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{VALUE} is Not Supported',
        }
    },
    rating:{
        type:Number,
        default:4.5
    },
    featured:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },

})

module.exports=mongoose.model('Product',productSchema);