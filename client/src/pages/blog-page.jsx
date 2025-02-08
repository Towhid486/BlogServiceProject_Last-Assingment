import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import Blog from './../components/blog/blog';
import BlogStore from './../store/BlogStore';

const BlogPage = () => {
    const {BlogListRequest} = BlogStore();

    useEffect(()=>{
        (async()=>{
            await BlogListRequest();
        })()
    },[])
    return (
        <Layout>
            <Blog/>
        </Layout>
    );
};

export default BlogPage;