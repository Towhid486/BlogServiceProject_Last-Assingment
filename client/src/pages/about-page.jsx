import React, { useEffect } from 'react';
import Layout from './../Layout/Layout';
import AboutOne from '../components/about/about';
import TeamMembers from '../components/about/TeamMembers';
import TeamStore from '../store/TeamStore';
import Counter from './../components/about/counter';

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