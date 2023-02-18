var mongoose=require('./config.js')

var mongoose=require("mongoose")

const listSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }

//    brand:{
//         type:String,
//         required:true
//     },

//     price:{
//         type:String,
//         required:true
//     },

//     discount:{
//         type:String,
//         required:true
//     },


   
})

const list=new mongoose.model("interview",listSchema);

module.exports=list;