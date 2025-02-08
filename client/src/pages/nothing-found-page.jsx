import React from 'react';
import Layout from '../Layout/Layout';
import nodata from '../assets/images/contact/404.png'
const NothingFoundPage = () => {
    return (
        <Layout>
            <img src={nodata} alt="" />
        </Layout>
    );
};

export default NothingFoundPage;