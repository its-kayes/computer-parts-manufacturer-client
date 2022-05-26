import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    let navigate = useNavigate();

    let [user] = useAuthState(auth);


    let email = user?.email;
    let url = `https://enigmatic-lake-23819.herokuapp.com/orders/${email}`;

    const [orders, setOrders] = useState([]);


    useEffect(() => {
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
                            navigate('/')
                        }
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                })
        }

    }, [user])



    const submit = (id) => {

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        console.log(id);

                        fetch(`https://enigmatic-lake-23819.herokuapp.com/order/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                toast.warning(' Parts Delete Successfully ');
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        toast.warn(' Delete Cancel ');
                    }
                }
            ]
        });
    }


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
                                <th> Cost </th>
                                <th>Payment</th>
                                <th> Action </th>
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
                                    <td> {order.totalPrice} </td>
                                    <td>
                                        {
                                            !order.transactionId && <Link to={`/dashboard/payment/${order._id}`} className='btn bg-success'> Pay </Link>
                                        }
                                    </td>
                                    <td>
                                        {
                                            !order.transactionId && <div className='container'>
                                                <button className='btn bg-red-700' onClick={() => submit(order._id)}> X </button>
                                            </div>
                                        }
                                    </td>
                                    <td> {order?.transactionId} </td>
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