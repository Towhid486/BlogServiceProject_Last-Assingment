import React, { useEffect } from 'react';
import Layout from './../Layout/Layout';
import AboutOne from '../components/about/about';
import TeamMembers from '../components/about/TeamMembers';
import Counter from '../components/about/Counter';
import TeamStore from '../store/TeamStore';

const AboutPage = () => {
    const {MemberListRequest} = TeamStore();

    useEffect(()=>{
        (async()=>{
            await MemberListRequest()
        })()
    },[])
    return (
        <Layout>
            <AboutOne/>
            <Counter/>
            <TeamMembers/>
        </Layout>
    );
};

export default AboutPage;