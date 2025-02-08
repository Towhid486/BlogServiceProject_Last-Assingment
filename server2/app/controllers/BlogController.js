import BlogModel from "../models/BlogModel.js";


export const BlogList = async(req,res)=>{
    try{
        let data=await BlogModel.find();
        return res.json({status:"success",count:data.length ,data:data});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}

export const BlogDetails = async(req,res)=>{
    try{
        let id=req.params.id;
        let data=await BlogModel.findOne({"_id":id});
        return res.json({status:"success",data:data});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}

export const CreateBlog = async(req,res)=>{
    try{
        let user_id=req.headers['user_id'];
        let reqBody = req.body;
        reqBody.user_id=user_id;
        await BlogModel.create(reqBody)
        return res.json({status:"success","Message":"New Blog Created Successfully"});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}

export const UpdateBlog = async(req,res)=>{
    try{
        let id=req.params.id;
        let reqBody = req.body
        let user_id=req.headers['user_id'];
        let data = await BlogModel.updateOne({"_id":id,"user_id":user_id},{$set:reqBody})
        return res.json({status:"success","Message":"Blog Updated Successfully", data:data});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}

export const DeleteBlog = async(req,res)=>{
    try{
        let id=req.params.id;
        let user_id=req.headers['user_id'];
        await BlogModel.deleteOne({"_id":id, "user_id":user_id})
        return res.json({status:"success", "Message":"Blog Deleted Successfully"});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}

