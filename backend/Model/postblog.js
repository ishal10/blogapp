const mongoose=require('mongoose');
const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});
const postModel=mongoose.model('post',postSchema);
module.exports=postModel;