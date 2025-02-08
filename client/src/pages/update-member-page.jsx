import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';

import { useParams } from 'react-router-dom';
import TeamStore from '../store/TeamStore';
import UpdateMember from '../components/edit-update/update-member';

const UpdateMemberPage = () => {
    const {MemberDetailsRequest} = TeamStore();
    const {id} = useParams();
    useEffect(()=>{
        (async()=>{
            await MemberDetailsRequest(id)
        })()
    },[MemberDetailsRequest])
    return (
        <Layout>
            <UpdateMember/>
        </Layout>
    );
};

export default UpdateMemberPage;