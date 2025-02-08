import React from 'react';
import toast from 'react-hot-toast';
import BlogStore from '../../store/BlogStore';
import ValidationHelper from '../../utility/ValidationHelper';

const UpdateBlog = () => {
    const {BlogDetail,BlogFormData,BlogFormOnChange,UpdateBlogRequest} = BlogStore()

    const Update = async (id)=>{
        if(ValidationHelper.IsEmpty(BlogFormData.title)){
            toast.error("Title Required")
        }
        if(ValidationHelper.IsEmpty(BlogFormData.img)){
            toast.error("Photo Required")
        }
        if(ValidationHelper.IsEmpty(BlogFormData.des)){
            toast.error("Description Required")
        }else{
            let res = await UpdateBlogRequest(id,BlogFormData);
            res?toast.success("Blog Updated") : toast.error("Something Went Wrong !")
        }
    }
    return (
        <section className="sofax-section-padding2">
            <div className="container">
                <div className="row text-center pt-5 pt-md-0 justify-content-center">
                    <div className="pb-3">
                        <h3>Edit <strong className='text-info'>Blog</strong></h3>
                    </div>
                    <div className="col-lg-7 text-start sofax-field-box bg-light-subtle">
                            <div className="sofax-main-field">
                                <label>Blog Title </label>
                                <textarea value={BlogFormData?.title} onChange={(e)=>BlogFormOnChange('title',e.target.value)} rows={2} placeholder="Title"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Photo</label>
                                <input value={BlogFormData.img} onChange={(e)=>BlogFormOnChange('img',e.target.value)} type="text" placeholder="Photo"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Description</label>
                                <textarea value={BlogFormData?.des} onChange={(e)=>BlogFormOnChange('des',e.target.value)} placeholder="Description"/>
                            </div>

                            <button onClick={()=>Update(BlogDetail['_id'])}  type="submit" className=" sofax-subcribe-btn2">Update</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateBlog;