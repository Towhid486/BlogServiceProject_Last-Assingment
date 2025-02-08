import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import UpdateBlog from '../components/edit-update/update-blog';
import BlogStore from '../store/BlogStore';
import { useParams } from 'react-router-dom';

const UpdateBlogPage = () => {
    const {BlogDetailsRequest} = BlogStore();
    const {id} = useParams();
    useEffect(()=>{
        (async()=>{
            await BlogDetailsRequest(id)
        })()
    },[])
    return (
        <Layout>
            <UpdateBlog/>
        </Layout>
    );
};

export default UpdateBlogPage;