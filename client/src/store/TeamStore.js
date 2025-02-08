import axios from "axios";
import { create } from "zustand";

const TeamStore = create((set)=>({

    MemberList: null,
    MemberCount: 0,
    MemberListRequest: async()=>{
        set({MemberList: null})
        let res = await axios.get("/api/TeamList");
        if(res.data['status'] === "success"){
            set({MemberList:res.data['data']})
            set({MemberCount:res.data['data'].length})
        }
    },


    MemberFormData:{name:"",sector:"",img:"",className:""},
    MemberFormOnChange: (name,value)=>{
        set((state)=>({
            MemberFormData:{
                ...state.MemberFormData,
                [name]:value
            }
        }))
    },

    AddMemberRequest:async(PostBody)=>{
        try{
            let res = await axios.post('/api/CreateMember',PostBody)
            set({MemberList:null})
            return res.data['status']==="success"
        }catch(e){
            unauthorized(e)
        }
    },

    MemberDetail: null,
    MemberDetailsRequest: async(id)=>{
        set({MemberDetail:null})
        let res = await axios.get(`/api/MemberDetails/${id}`);
        set({MemberDetail:res.data['data']})
        set({MemberFormData:res.data['data']})
    },
    UpdateMemberRequest:async(id,PostBody)=>{
        try{
            let res = await axios.post(`/api/UpdateMember/${id}`, PostBody)
            return res.data['status']==="success"
        }catch(e){
            unauthorized(e)
        }
    },

    RemoveMemberRequest:async(id)=>{
        try{
            set({MemberList:null})
            await axios.get(`/api/DeleteMember/${id}`);
        }catch(e){
            unauthorized(e)
        }
    },




}))

export default TeamStore;