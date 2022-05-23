import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {

    let [user] = useAuthState(auth);

    // let [orders, setOrders] = useState();

    let email = user?.email;
    console.log(email);
    let url = `http://localhost:5000/orders/${email}`;

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    let { data: orders, isLoading, refetch } = useQuery('users', () => fetch( url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))
    // setOrders(orderss);

    if (isLoading) {
        return <Loading> </Loading>
    }

    // setTimeout('10');

    return (
        <div>
            <h2 className='text-5xl font-bold my-5'> My Orders Part </h2>
            <h1> Total Order {orders?.length} </h1>

            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th> Parts Name </th>
                                <th> Address </th>
                                <th>Total Order </th>
                                <th>Number </th>
                                <th>Email</th>
                                <th>Payment</th>
                                <th>Transaction ID</th>
                            </tr>
                        </thead>
                        {
                            orders?.map((order, index) => <tbody>
                                <tr>
                                    <th> {index + 1} </th>
                                    <td> {order.partsName} </td>
                                    <td> {order.address} </td>
                                    <td> {order.totalOrder} </td>
                                    <td> {order.number} </td>
                                    <td> {order.email} </td>
                                    <td> Pay </td>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;