import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Users = () => {

    let {data: users, isLoading, refetch} = useQuery('users', ()=> fetch('', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }))

    if(isLoading) {
        return <Loading> </Loading>
    }

    return (
        <div>
            <h1> All users:- {users.length} </h1>
        </div>
    );
};

export default Users;