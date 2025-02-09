import {UserLoginService} from "../service/UserService.js";

export const Login = async(req,res)=>{

    let result=await UserLoginService(req)
    if(result['status']==="success"){
        //Cookie Set
        let cookieOption={expires: new Date(Date.now()+48*60*60*1000),httpOnly: false};
        //Set Cookie With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)
    
    }else{
        return res.status(200).json(result)
    }
}


export const UserLogout= async (req,res)=>{
    let cookieOption={expires: new Date(Date.now()-48*60*60*1000),httpOnly: false};
    res.cookie('token',"",cookieOption)
    return res.status(200).json({status:"success"})
}


