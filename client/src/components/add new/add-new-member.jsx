import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamStore from '../../store/TeamStore';
import ValidationHelper from '../../utility/ValidationHelper';
import toast from 'react-hot-toast';

const AddNewMember = () => {
    const {MemberFormData,MemberFormOnChange,AddMemberRequest} = TeamStore()
    const navigate = useNavigate()
    const CreateMember = async ()=>{
        if(ValidationHelper.IsEmpty(MemberFormData.name)){
            toast.error("Name Required")
        }
        if(ValidationHelper.IsEmpty(MemberFormData.img)){
            toast.error("Photo Required")
        }
        if(ValidationHelper.IsEmpty(MemberFormData.sector)){
            toast.error("Position Required")
        }else{
            let res = await AddMemberRequest(MemberFormData);
            res?toast.success("New Member Added") : toast.error("Something Went Wrong !")
            navigate('/dashboard')
        }
    }
    return (
        <section className="sofax-section-padding2">
            <div className="container">
                <div className="row text-center pt-5 pt-md-0 justify-content-center">
                    <div className="pb-3">
                        <h3>Add New <strong className='text-info'>Member</strong></h3>
                    </div>
                    <div className="col-lg-5 text-start sofax-field-box bg-light-subtle">
                            <div className="sofax-main-field">
                                <label>Member Name </label>
                                <input onChange={(e)=>MemberFormOnChange('name',e.target.value)} type="text" placeholder="Name"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Photo</label>
                                <input onChange={(e)=>MemberFormOnChange('img',e.target.value)} type="text" placeholder="Photo url"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Animation ClassName</label> <p>Add this<strong> "sofax-team-member-aboutus"</strong> value on form</p>
                                <input onChange={(e)=>MemberFormOnChange('className',e.target.value)} type="text" placeholder="CSS Class"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Position</label>
                                <input onChange={(e)=>MemberFormOnChange('sector',e.target.value)} type="text" placeholder="Position"/>
                            </div>

                            <button onClick={CreateMember}  type="submit" className=" sofax-subcribe-btn2">Add</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddNewMember;