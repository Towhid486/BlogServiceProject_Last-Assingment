import React from 'react';
import toast from 'react-hot-toast';
import ValidationHelper from '../../utility/ValidationHelper';
import ServiceStore from '../../store/ServiceStore';

const UpdateService = () => {
    const {ServiceDetail,ServiceFormData,ServiceFormOnChange,UpdateServiceRequest} = ServiceStore()

    const Update = async (id)=>{
        if(ValidationHelper.IsEmpty(ServiceFormData.title)){
            toast.error("Title Required")
        }
        if(ValidationHelper.IsEmpty(ServiceFormData.img)){
            toast.error("Photo Required")
        }
        if(ValidationHelper.IsEmpty(ServiceFormData.des)){
            toast.error("Description Required")
        }else{
            let res = await UpdateServiceRequest(id,ServiceFormData);
            res?toast.success("Service Updated") : toast.error("Something Went Wrong !")
        }
    }
    return (
        <section className="sofax-section-padding2">
            <div className="container">
                <div className="row text-center pt-5 pt-md-0 justify-content-center">
                    <div className="pb-3">
                        <h3>Edit <strong className='text-info'>Service</strong></h3>
                    </div>
                    <div className="col-lg-7 text-start sofax-field-box bg-light-subtle">
                            <div className="sofax-main-field">
                                <label>Service Title </label>
                                <textarea value={ServiceFormData?.title} onChange={(e)=>ServiceFormOnChange('title',e.target.value)} rows={2} placeholder="Title"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Photo</label>
                                <input value={ServiceFormData?.img} onChange={(e)=>ServiceFormOnChange('img',e.target.value)} type="text" placeholder="Photo url"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Description</label>
                                <textarea value={ServiceFormData?.des} onChange={(e)=>ServiceFormOnChange('des',e.target.value)} placeholder="Description"/>
                            </div>

                            <button onClick={()=>Update(ServiceDetail['_id'])}  type="submit" className=" sofax-subcribe-btn2">Update</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateService;