const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
PORT=3008;

const userRoute=require('./Routes/userRoute')
const postRoute=require('./Routes/postRoute')
require("./DB/connection")


const app=new express();
app.use(morgan('dev'));
app.use(cors())

app.use('/api',userRoute)
app.use('/api',postRoute)

app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
})