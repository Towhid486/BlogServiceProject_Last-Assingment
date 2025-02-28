import axios  from "axios";
import {setEmail, unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";
import { create } from "zustand";
const UserStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },

    LoginFormValue:{email:"", password:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormValue:{
                ...state.LoginFormValue,
                [name]:value
            }
        }))
    },

    LoginRequest:async(postBody)=>{
        try{
            let res=await axios.post(`/api/Login`,postBody);
            setEmail(email);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e)
        }
    },


    UserLogoutRequest:async()=>{
        let res=await axios.get(`/api/UserLogout`);
        return res.data['status'] === "success";
    },


}))

export default UserStore;