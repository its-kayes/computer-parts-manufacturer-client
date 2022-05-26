import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    let navigate = useNavigate();

    let [user] = useAuthState(auth);


    let email = user?.email;
    // console.log(email);
    let url = `http://localhost:5000/orders/${email}`;


    // let { data: orders, isLoading, refetch } = useQuery('users', () => fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     },
    // }).then(res => res.json()))

    // if (isLoading) {
    //     return <Loading> </Loading>
    // }

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        // console.log(user);
        if (user) {
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 404 || res.status === 401) {
                        let errorCode = window.confirm('Invalid Login Token');
                        if (errorCode) {
                            // signOut(auth);
                            // localStorage.removeItem('accessToken');
                            navigate('/')
                        }
                        // signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    // console.log('res', res);
                    return res.json()
                })
                .then(data => {
                    // console.log(data);
                    setOrders(data);
                })
        }
        // else{
        //     navigate('/login')
        // }

    }, [user])


    // console.log(orders);


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
                                    <td> <Link to={`/dashboard/payment/${order._id}`}> Pay </Link> </td>
                                    <td> In Process </td>

                                    {/* <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                        {(order.price && order.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                        </div>}
                                    </td> */}
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