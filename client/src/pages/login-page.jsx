import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import LoginForm from '../components/auth/LoginForm';
import UserStore from '../store/UserStore';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const {isLogin} = UserStore()
    const navigate = useNavigate();
    useEffect(()=>{
        if(isLogin()){
            navigate('/')
            toast.success("You are already logged in")
        }
    },[navigate,isLogin])
    return (
        <Layout>
             <LoginForm />
        </Layout>
    );
};

export default LoginPage;