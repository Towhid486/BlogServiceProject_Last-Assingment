import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { unauthorized } from '../utility/utility';

const ImgUploadStore = create((set)=>({



    FileUploadRequest : async(reqBody)=>{
        try{
            let res = await axios.post('/api/file-upload', reqBody, {headers: {'Content-Type': 'multipart/form-data' }})
            if(res.data['status']===true) {
                toast.success(res.data.msg)
                return res.data;
            }else{
                toast.error(res.data.msg)
                return false;
            }
        }catch(e){
            unauthorized(e)
        }
    },




}))

export default ImgUploadStore;