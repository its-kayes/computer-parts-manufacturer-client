import React, { useState } from 'react';

const MyOrders = () => {

    let [orders, setOrders] = useState();

    fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))

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
                            </tr>
                        </thead>
                        {
                            orders?.map((order, index) => <tbody>
                                <tr>
                                    <th> {index + 1} </th>
                                    <td> {order.partsName} </td>
                                    <td> {order.address } </td>
                                    <td> {order.totalOrder} </td>
                                    <td> {order.number} </td>
                                    <td> {order.email} </td>
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