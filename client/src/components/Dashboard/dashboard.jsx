import { Link } from "react-router-dom";
import Icon1 from "../../assets/images/dashboard/icon1.png";
import Icon2 from "../../assets/images/dashboard/icon2.png";
import Icon3 from "../../assets/images/dashboard/icon3.png";
import BlogStore from "../../store/BlogStore";
import ServiceStore from "../../store/ServiceStore";
import TeamStore from "../../store/TeamStore";
import toast from "react-hot-toast";


function Dashboard() {
    const {MemberList,MemberCount,MemberListRequest,RemoveMemberRequest} = TeamStore();
    const {ServiceList,ServiceCount,RemoveServiceRequest,ServiceListRequest} = ServiceStore();
    const {BlogList,BlogCount,RemoveBlogRequest,BlogListRequest} = BlogStore();


    const BlogRemove = async(blogID)=>{
        await RemoveBlogRequest(blogID)
        toast.error("Blog Removed")
        await BlogListRequest()
    }

    const ServiceRemove = async(serviceID)=>{
        await RemoveServiceRequest(serviceID)
        toast.error("Service Removed")
        await ServiceListRequest()
    }


    const MemberRemove = async(memberID)=>{
        await RemoveMemberRequest(memberID)
        toast.error("Member Removed")
        await MemberListRequest()
    }

    return (
        <section className="sofax-section-padding bg-light" id="features">
            <div className="container">
                <div className="row pt-md-0 pt-4 center max-width-700">
                    <div className=" col-lg-12 pb-2 text-center tg-heading-subheading animation-style3">
                        <h3>Welcome To Admin <span className="text-info bg-gradient">Dashboard</span></h3>
                    </div>
                </div>
                <div className="row">

                        <div className="col-lg-5 col-md-6">
                            <div className="sofax-features-boxv7 bg-primary-subtle">
                                <div className="sofax-features-iconv7">
                                    <img src={Icon3} alt="icon" />
                                </div>
                                <div className="sofax-features-contentv7">
                                    <h4>Total Blog <strong>{BlogCount}</strong></h4>
                                    <Link className=" dashboard-btn sofax-default-btn pill sofax-header-btn bg-info mr-2 " to="/add-new-blog">
                                        <span className="text-black"><b>+</b> Add New Blog</span>
                                    </Link>
                                    <p></p>
                                </div>
                            </div>
                            <ul>
                                {
                                            BlogList?.map((blog, index) => (
                                            <li className="d-flex my-4" key={index}>
                                                <div className="col-6 col-md-8 d-flex">
                                                    <Link className="d-flex hover-shadow" to={`/blog-details/${blog['_id']}`}>
                                                        <img style={{width:"50px",height:"50px"}} src={blog.img}/>
                                                        <h6 className="ps-2">{blog.title}</h6>
                                                    </Link>
                                                </div>
                                                <div className="col-6 col-md-4 d-flex justify-content-end">
                                                    <Link style={{minWidth:"80px"}} className="btn dashboard-btn bg-dark px-0" to={`/edit-blog/${blog['_id']}`}>
                                                        <span className="text-white text-uppercase">Edit</span>
                                                    </Link>
                                                    <button onClick={()=>BlogRemove(blog['_id'])} style={{minWidth:"80px"}} className="btn bg-warning">
                                                        <span>Del</span>
                                                    </button>
                                                </div>
                                            </li>
                                    ))
                                }
                            </ul>
                        </div>

                        

                        <div className="col-lg-4 col-md-6">
                            <div className="sofax-features-boxv7 bg-secondary-subtle">
                                <div className="sofax-features-iconv7">
                                    <img src={Icon2} alt="icon" />
                                </div>
                                <div className="sofax-features-contentv7">
                                    <h4>Total Service <strong>{ServiceCount}</strong></h4>
                                    <Link className=" dashboard-btn sofax-default-btn pill sofax-header-btn bg-info me-4 mb-2 " to="/add-new-service">
                                        <span className="text-black"><b>+</b> Add New Service</span>
                                    </Link>
                                    <p></p>
                                </div>
                            </div>
                            <ul>
                                {
                                        ServiceList?.map((service, index) => (
                                            <li className="d-flex my-4" key={index}>
                                                <div className="col-7 d-flex">
                                                    <img style={{width:"50px",height:"50px"}} src={service.img}/>
                                                    <h6 className="px-2">{service.title}</h6>
                                                </div>
                                                <div className="col-5 d-flex justify-content-end">
                                                    <Link style={{minWidth:"80px"}} className="btn dashboard-btn bg-dark px-0" to={`/edit-service/${service['_id']}`}>
                                                        <span className="text-white text-uppercase">Edit</span>
                                                    </Link>
                                                    <button onClick={()=>ServiceRemove(service['_id'])} style={{minWidth:"80px"}} className="btn bg-warning">
                                                        <span>Del</span>
                                                    </button>
                                                </div>
                                            </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="sofax-features-boxv7 bg-info-subtle">
                                <div className="sofax-features-iconv7">
                                    <img src={Icon1} alt="icon" />
                                </div>
                                <div className="sofax-features-contentv7">
                                    <h4>Total Member <strong>{MemberCount}</strong></h4>
                                    <Link className=" dashboard-btn sofax-default-btn pill sofax-header-btn bg-info me-4 mb-2 " to="/add-new-member">
                                        <span className="text-black"><b>+</b> Add New Member</span>
                                    </Link>
                                    <p></p>
                                </div>
                            </div>
                            <ul>
                                {
                                    MemberList?.map((member, index) => (
                                            <li className="d-flex my-4" key={index}>
                                                <div className="col-5 d-flex">
                                                    <img style={{width:"50px",height:"50px"}} src={member.img}/>
                                                    <h6 className="ps-2">{member.name}</h6>
                                                </div>
                                                <div className="col-7 d-flex justify-content-end">
                                                    <Link style={{minWidth:"80px"}} className="btn dashboard-btn bg-dark px-0" to={`/edit-member/${member['_id']}`}>
                                                        <span className="text-white text-uppercase">Edit</span>
                                                    </Link>
                                                    <button onClick={()=>MemberRemove(member['_id'])} style={{minWidth:"80px"}} className="btn bg-warning">
                                                        <span>Del</span>
                                                    </button>
                                                </div>
                                            </li>
                                    ))
                                }
                            </ul>
                        </div>

                </div>
            </div>
        </section>
    );
}

export default Dashboard;
