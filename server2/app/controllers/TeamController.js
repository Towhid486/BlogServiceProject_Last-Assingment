import TeamModel from "../models/TeamModel.js";
import ServiceModel from "../models/ServiceModel.js";


export const TeamList = async(req,res)=>{
    try{
        let data=await TeamModel.find();
        return res.json({status:"success",count:data.length ,data:data});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}
export const TeamDetails = async(req,res)=>{
    try{
        let id=req.params.id;
        let data=await TeamModel.findOne({"_id":id});
        return res.json({status:"success",data:data});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}
export const CreateMember = async(req,res)=>{
    try{
        let user_id=req.headers['user_id'];
        let reqBody = req.body;
        reqBody.user_id=user_id;
        await TeamModel.create(reqBody)
        return res.json({status:"success","Message":"User CreateTask Successfully"});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}

export const UpdateMember = async(req,res)=>{
    try{

        let id=req.params.id;
        console.log(id)
        let reqBody = req.body
        let user_id=req.headers['user_id'];
        let data = await TeamModel.updateOne({"_id":id,"user_id":user_id},{$set:reqBody})
        return res.json({status:"success","Message":"Member Update Successfully", data:data});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }

}

export const DeleteMember = async(req,res)=>{
    try{
        let id=req.params.id;
        let user_id=req.headers['user_id'];
        await TeamModel.deleteOne({"_id":id,"user_id":user_id})
        return res.json({status:"success","Message":"User DeleteTask Successfully"});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }


}

