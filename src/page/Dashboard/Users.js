import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Users = () => {
    let [role, setRole] = useState('');
    // let [user] = useAuthState(auth);
    // let email = user?.email;

    let { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/allusers', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading> </Loading>
    }

    let makeAdmin = (email, role) => {
        console.log(role);
        setRole(role);
        fetch(`http://localhost:5000/allusers/admin/${email}`, {
            method: 'PUT',
            'content-type': 'application/json'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success(' Update as Admin ')
            refetch();
        });
    }


    return (
        <div>
            <h1> All users:- {users.length} </h1>
            <div>
                <div>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th> Email </th>
                                    <th> Role </th>
                                    <th> ? </th>
                                </tr>
                            </thead>
                            {
                                users?.map((user, index) => <tbody>
                                    <tr>
                                        <th> {index + 1} </th>
                                        <td> {user.email} </td>
                                        {
                                            user?.role !== 'admin' ?
                                            <td> <button onClick={() => makeAdmin(user.email, user?.role)} className='btn bg-red-400'> Make Admin </button> </td>
                                            : 
                                            <td> <button disabled onClick={() => makeAdmin(user.email, user?.role)} className='btn bg-red-400'> Make Admin </button> </td>
                                        }
                                        <td> Remove User </td>
                                    </tr>
                                </tbody>)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;