const express=require('express');
const router=express.Router();
const post=require('../Model/postblog');

router.use(express.json());

//addblog api
router.post('/addblog',async(req,res)=>{
    console.log(req.body)
    try {
        const data=await post(req.body).save();
        res.status(200).json({message:"Registered Successfully"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Unable to register"})        
    }
})


//viewblog api
router.get('/viewall',async(req,res)=>{
    try {
        const data=await post.find()
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
})

//delete blog

router.delete('/remove/:id',async(req,res)=>{
    const{ id }=req.params;
    try{
        const data = await post.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(404).json({message:"No blog found with thid ID"});
        }
        res.status(200).send({message:"blog deleted",id});
    } catch (error){
        console.log(error);
        res.status(500).send({message:"Unable to delete blog"});
    }
})

//TO UPDATE
router.put('/edit/:id',async(req,res)=>{
    try{
        var userid = req.params.id;
        var item = req.body;
        const data = await post.findByIdAndUpdate(userid,item);
        res.status(200).send({message:"Blog updated successfully"})

    } catch (error){
        console.log(error)
    }
})


module.exports=router;
