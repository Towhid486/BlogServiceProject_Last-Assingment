import React, { useEffect } from 'react';

import Layout from './../Layout/Layout';
import Dashboard from './../components/Dashboard/dashboard';
import TeamStore from '../store/TeamStore';
import ServiceStore from '../store/ServiceStore';
import BlogStore from '../store/BlogStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import UserStore from '../store/UserStore';

const DashboardPage = () => {
    const navigate = useNavigate();
    const {MemberListRequest} = TeamStore()
    const {ServiceListRequest} = ServiceStore()
    const {BlogListRequest} = BlogStore()
    const {isLogin} = UserStore()

    useEffect(()=>{
        (async()=>{
            await MemberListRequest();
            await ServiceListRequest();
            await BlogListRequest();
        })()
    },[])
    if(!isLogin()){
        toast.error("Please login as admin")
        navigate("/login")
    }
    return (
        <Layout>
            <Dashboard/>
        </Layout>
    );
};

export default DashboardPage;