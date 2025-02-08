import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import BlogDetails from '../components/blog/single-blog/BlogDetails';
import BlogStore from '../store/BlogStore';
import { useParams } from 'react-router-dom';

const BlogDetailsPage = () => {
    const {BlogDetail,BlogDetailsRequest} = BlogStore();
    const {id} = useParams();

    useEffect(()=>{
        (async()=>{
            await BlogDetailsRequest(id)
        })()
    },[id])
    return (
        <Layout>
            <BlogDetails/>
        </Layout>
    );
};

export default BlogDetailsPage;