import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageOrders = () => {

    let { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/manageorders').then(res => res.json()));

    if (isLoading) {
        return <Loading> </Loading>
    }

    return (
        <div>
            <h3> Manage All Orders {orders?.length} </h3>

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
                                    <td> Due </td>
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

export default ManageOrders;