import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import Services from '../components/services/service';
import ServiceStore from '../store/ServiceStore';

const ServicePage = () => {
    const {ServiceListRequest} = ServiceStore()
    useEffect(()=>{
        (async()=>{
            await ServiceListRequest()
        })()
    },[])
    return (
        <Layout>
            <Services/>
        </Layout>
    );
};

export default ServicePage;