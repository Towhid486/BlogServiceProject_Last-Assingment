import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import Hero from './../components/home/hero/Hero';
import Blog from '../components/home/blog/blog';
import BlogStore from './../store/BlogStore';

const HomePage = () => {
    const {BlogListRequest} = BlogStore();

    useEffect(()=>{
        (async()=>{
            await BlogListRequest();
        })()
    },[])
    return (
        <Layout>
            <Hero/>
            <Blog/>
        </Layout>
    );
};

export default HomePage;