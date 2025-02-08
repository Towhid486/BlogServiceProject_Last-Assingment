import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import UpdateService from '../components/edit-update/update-service';
import ServiceStore from '../store/ServiceStore';

const UpdateServicePage = () => {
    const {ServiceDetailsRequest} = ServiceStore();
    const {id} = useParams();
    useEffect(()=>{
        (async()=>{
            await ServiceDetailsRequest(id)
        })()
    },[])
    return (
        <Layout>
            <UpdateService/>
        </Layout>
    );
};

export default UpdateServicePage;