import UsersModel from "../models/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";

export const UserLoginService = async (req)=>{
    try{
        let reqBody = req.body;
        let data = await UsersModel.findOne(reqBody);
        if(data===null){
            console.log("Login Faild")
            return{status:"fail","Message":"User not found"};

        }else{
            //Login Success Token Encode
            let token = TokenEncode(data['email'],data['_id'])
            console.log("Login Success")
            return {status:"success",token:token,"Message":"User Login successfully"};
        }

    }catch(err){
        return {status:"fail","Message":err.toString()};
    }
}