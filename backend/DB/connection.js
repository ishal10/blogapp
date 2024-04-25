const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://ishal:ishal@cluster0.7ixjont.mongodb.net/NirBlog?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch((error)=>{
    console.log(error)
})