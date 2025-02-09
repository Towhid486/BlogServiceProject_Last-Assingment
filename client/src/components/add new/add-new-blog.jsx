import React from 'react';
import { useNavigate } from 'react-router-dom';
import ValidationHelper from '../../utility/ValidationHelper';
import toast from 'react-hot-toast';
import BlogStore from '../../store/BlogStore';

const AddNewBlog = () => {
    const {BlogFormData,BlogFormOnChange,AddBlogRequest} = BlogStore()
    const navigate = useNavigate()
    const CreateBlog = async ()=>{
        if(ValidationHelper.IsEmpty(BlogFormData.title)){
            toast.error("Title Required")
        }
        if(ValidationHelper.IsEmpty(BlogFormData.img)){
            toast.error("Photo Required")
        }
        if(ValidationHelper.IsEmpty(BlogFormData.des)){
            toast.error("Description Required")
        }else{
            let res = await AddBlogRequest(BlogFormData);
            res?toast.success("New Blog Added") : toast.error("Something Went Wrong !")
            navigate('/dashboard')
        }
    }
    return (
        <section className="sofax-section-padding2">
            <div className="container">
                <div className="row text-center pt-5 pt-md-0 justify-content-center">
                    <div className="pb-3">
                        <h3>Add New <strong className='text-info'>Blog</strong></h3>
                    </div>
                    <div className="col-lg-5 text-start sofax-field-box bg-light-subtle">
                            <div className="sofax-main-field">
                                <label>Blog Title </label>
                                <textarea onChange={(e)=>BlogFormOnChange('title',e.target.value)} rows={2} placeholder="Title"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Photo</label>
                                <input onChange={(e)=>BlogFormOnChange('img',e.target.value)} type="text" placeholder="Photo url"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Description</label>
                                <textarea onChange={(e)=>BlogFormOnChange('des',e.target.value)} placeholder="Description"/>
                            </div>

                            <button onClick={CreateBlog}  type="submit" className=" sofax-subcribe-btn2">Add</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddNewBlog;