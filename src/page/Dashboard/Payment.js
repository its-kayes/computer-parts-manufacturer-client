import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1e5sAjoeNet3APqkd0vZTXJCQ2ivpZcl4mXtMK0Uyq2tTQ11cVVJgkJMMAzbkKEgJs2MxHqHQCMKuhLyF7ze7400wy47I7MA');

const Payment = () => {
    const { id } = useParams();
    const url = `https://enigmatic-lake-23819.herokuapp.com/payment/${id}`;
    // console.log(id);

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {/* <h1> kaj kore </h1> */}
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.name}</p>
                    <h2 class="card-title">Please Pay for {order.partsName}</h2>
                    <p>Please pay: ${order.totalPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;