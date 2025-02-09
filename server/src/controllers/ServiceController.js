import ServiceModel from "../models/ServiceModel.js";

export const ServiceList = async(req,res)=>{
    try{
        let data=await ServiceModel.find();
        return res.json({status:"success",count:data.length ,data:data});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}
export const ServiceDetails = async(req,res)=>{
    try{
        let id=req.params.id;
        let data=await ServiceModel.findOne({"_id":id});
        return res.json({status:"success",data:data});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}
export const CreateService = async(req,res)=>{
    try{
        let user_id=req.headers['user_id'];
        let reqBody = req.body;
        reqBody.user_id=user_id;
        await ServiceModel.create(reqBody)
        return res.json({status:"success","Message":"New Service Created Successfully"});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }
}

export const UpdateService = async(req,res)=>{
    try{

        let id=req.params.id;
        console.log(id)
        let reqBody = req.body
        let user_id=req.headers['user_id'];
        let data = await ServiceModel.updateOne({"_id":id,"user_id":user_id},{$set:reqBody})
        return res.json({status:"success","Message":"Service Updated Successfully", data:data});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }

}

export const DeleteService = async(req,res)=>{
    try{
        let id=req.params.id;
        let user_id=req.headers['user_id'];
        await ServiceModel.deleteOne({"_id":id, "user_id":user_id})
        return res.json({status:"success", "Message":"Service Deleted Successfully"});
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()});
    }


}

