import React from 'react';
import toast from 'react-hot-toast';
import ValidationHelper from '../../utility/ValidationHelper';
import TeamStore from '../../store/TeamStore';

const UpdateMember = () => {
    const {MemberDetail,MemberFormData,MemberFormOnChange,UpdateMemberRequest} = TeamStore()

    const Update = async (id)=>{
        if(ValidationHelper.IsEmpty(MemberFormData.name)){
            toast.error("Name Required")
        }
        if(ValidationHelper.IsEmpty(MemberFormData.img)){
            toast.error("Photo Required")
        }
        if(ValidationHelper.IsEmpty(MemberFormData.sector)){
            toast.error("Position Required")
        }else{
            let res = await UpdateMemberRequest(id,MemberFormData);
            res?toast.success("Member Info Updated") : toast.error("Something Went Wrong !")
        }
    }
    return (
        <section className="sofax-section-padding2">
            <div className="container">
                <div className="row text-center pt-5 pt-md-0 justify-content-center">
                    <div className="pb-3">
                        <h3>Edit <strong className='text-info'>Member </strong> Info</h3>
                    </div>
                    <div className="col-lg-5 text-start sofax-field-box bg-light-subtle">
                            <div className="sofax-main-field">
                                <label>Member Name </label>
                                <textarea value={MemberFormData?.name} onChange={(e)=>MemberFormOnChange('name',e.target.value)} rows={2} placeholder="Title"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Photo</label>
                                <input value={MemberFormData.img} onChange={(e)=>MemberFormOnChange('img',e.target.value)} type="text" placeholder="Photo url"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Animation ClassName</label> <p>Add this<strong> "sofax-team-member-aboutus"</strong> value on form</p>
                                <input value={MemberFormData.className} onChange={(e)=>MemberFormOnChange('className',e.target.value)} type="text" placeholder="CSS Class"/>
                            </div>
                            <div className="sofax-main-field">
                                <label className="form-label">Position</label>
                                <textarea value={MemberFormData?.sector} onChange={(e)=>MemberFormOnChange('sector',e.target.value)} placeholder="Position"/>
                            </div>

                            <button onClick={()=>Update(MemberDetail['_id'])}  type="submit" className=" sofax-subcribe-btn2">Update</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateMember;