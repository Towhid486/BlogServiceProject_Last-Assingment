import axios from "axios";
import { create } from "zustand";

const ServiceStore = create((set)=>({

    ServiceList: null,
    ServiceCount:0,
    ServiceListRequest: async()=>{
        set({ServiceList: null})
        let res = await axios.get("/api/ServiceList");
        if(res.data['status'] === "success"){
            set({ServiceList:res.data['data']})
            set({ServiceCount:res.data['data'].length})
        }
    },



    ServiceFormData:{title:"",des:"",img:""},
    ServiceFormOnChange: (name,value)=>{
        set((state)=>({
            ServiceFormData:{
                ...state.ServiceFormData,
                [name]:value
            }
        }))
    },

    AddServiceRequest:async(PostBody)=>{
        try{
            let res = await axios.post('/api/CreateService',PostBody)
            set({ServiceFormData:null})
            return res.data['status']==="success"
        }catch(e){
            unauthorized(e)
        }
    },

    ServiceDetail: null,
    ServiceDetailsRequest: async(id)=>{
        set({ServiceDetail:null})
        let res = await axios.get(`/api/ServiceDetails/${id}`);
        set({ServiceDetail:res.data['data']})
        set({ServiceFormData:res.data['data']})
    },
    UpdateServiceRequest:async(id,PostBody)=>{
        try{
            let res = await axios.post(`/api/UpdateService/${id}`, PostBody)
            return res.data['status']==="success"
        }catch(e){
            unauthorized(e)
        }
    },

    RemoveServiceRequest:async(id)=>{
        try{
            set({ServiceList:null})
            await axios.get(`/api/DeleteService/${id}`);
        }catch(e){
            unauthorized(e)
        }
    },

}))

export default ServiceStore;
