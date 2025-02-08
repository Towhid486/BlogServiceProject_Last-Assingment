import React from 'react';
import { useNavigate } from 'react-router-dom';
import ValidationHelper from '../../utility/ValidationHelper';
import toast from 'react-hot-toast';
import ServiceStore from '../../store/ServiceStore';

const AddNewService = () => {
    const {ServiceFormData,ServiceFormOnChange,AddServiceRequest} = ServiceStore()
    const navigate = useNavigate()
    const CreateService = async ()=>{
        if(ValidationHelper.IsEmpty(ServiceFormData?.title)){
            toast.error("Title Required")
        }
        if(ValidationHelper.IsEmpty(ServiceFormData?.img)){
            toast.error("Photo Required")
        }
        if(ValidationHelper.IsEmpty(ServiceFormData?.des)){
            toast.error("Description Required")
        }
        else{
            let res = await AddServiceRequest(ServiceFormData);
            res?toast.success("New Service Added") : toast.error("Something Went Wrong !")
            navigate('/dashboard')
        }
    }
    return (
        <section className="sofax-section-padding2">
            <div className="container">
                <div className="row text-center pt-4 pt-md-0 justify-content-center">
                        <h3>Add New <strong className='text-info'>Service</strong></h3>
                    <div className="col-lg-6 text-start sofax-field-box bg-light-subtle">
                            <div className="sofax-main-field">
                                <label>Service Title </label>
                                <input onChange={(e)=>ServiceFormOnChange('title',e.target.value)} type="text" placeholder="Title"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Photo</label>
                                <input onChange={(e)=>ServiceFormOnChange('img',e.target.value)} type="text" placeholder="Photo"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Description</label>
                                <textarea onChange={(e)=>ServiceFormOnChange('des',e.target.value)} type="text" placeholder="Description"/>
                            </div>

                            <button onClick={CreateService}  type="submit" className=" sofax-subcribe-btn2">Add</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddNewService;