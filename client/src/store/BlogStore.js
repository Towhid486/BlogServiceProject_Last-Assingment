import axios from "axios";
import { create } from "zustand";
import base from './BaseURL'
const BlogStore = create((set)=>({

    BlogList: null,
    BlogCount:0,
    BlogListRequest: async()=>{
        set({BlogList: null})
        let res = await axios.get(`${base}/api/BlogList`);
        if(res.data['status'] === "success"){
            set({BlogList:res.data['data']})
            set({BlogCount:res.data['data'].length})
        }
    },

    BlogDetail: null,
    BlogDetailsRequest: async(id)=>{
        set({BlogDetail:null})
        let res = await axios.get(`${base}/api/BlogDetails/${id}`);
        set({BlogDetail:res.data['data']})
        set({BlogFormData:res.data['data']})
    },



    BlogFormData:{title:"",img:"",des:""},
    BlogFormOnChange: (name,value)=>{
        set((state)=>({
            BlogFormData:{
                ...state.BlogFormData,
                [name]:value
            }
        }))
    },

    AddBlogRequest:async(PostBody)=>{
        try{
            let res = await axios.post(`${base}/api/CreateBlog`,PostBody)
            set({BlogFormData:null})
            return res.data['status']==="success"
        }catch(e){
            unauthorized(e)
        }
    },

    UpdateBlogRequest:async(id,PostBody)=>{
        try{
            let res = await axios.post(`/api/UpdateBlog/${id}`, PostBody)
            return res.data['status']==="success"
        }catch(e){
            unauthorized(e)
        }
    },

    RemoveBlogRequest:async(id)=>{
        try{
            set({BlogList:null})
            await axios.get(`${base}/api/DeleteBlog/${id}`);
        }catch(e){
            unauthorized(e)
        }
    },

}))

export default BlogStore;
