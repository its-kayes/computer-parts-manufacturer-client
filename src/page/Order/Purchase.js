import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const Purchase = () => {

    const [user, loading, error] = useAuthState(auth);

    let [part, setPart] = useState();
    let { id } = useParams();


    let url = `http://localhost:5000/parts/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])


    let partOrder = event => {
        event.preventDefault();

        let name = event.target.name.value;
        let email = event.target.email.value;
        let number = event.target.number.value;
        let address = event.target.address.value;
        let totalOrder = event.target.totalorder.value;

        let orderDetails = {
            partsName: part.name,
            name: name,
            email: email,
            number: number,
            address: address,
            totalOrder: totalOrder
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        // console.log(orderDetails);
        toast.success('We are waiting for your payment, check your dashboard and clear your payment')
        event.target.reset();
    }

    return (
        <div>
            <h2> Ghu kha </h2>
            <div>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={part?.img} alt='Part Img' class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">{part?.name}</h1>
                            <p className='font-bold text-success my-2'> Price: ${part?.price} (Per item) </p>
                            <div className='font-semibold'>
                                <p>In Stock: {part?.stock} pieces</p>
                                <p>Minimum buy: {part?.minOrder} pieces</p>
                            </div>
                            <p class="py-6"> {part?.description} </p>
                            <button > <label for="my-modal-6" class="btn modal-button">Order Now</label> </button>

                            <div>
                                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">

                                    {/* <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                        <div class="modal-action">
                                            <label for="my-modal-6" class="btn">Yay!</label>
                                        </div> */}
                                    <form onSubmit={partOrder} className="modal-box">
                                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="font-bold text-lg">{part?.name}</h3>

                                        <input name='name' type="text" disabled value={user?.displayName} placeholder="Patient Name" className="my-4 input input-bordered w-full max-w-xs" />
                                        <input name='email' type="email" disabled value={user?.email} placeholder="Email" className="my-4 input input-bordered w-full max-w-xs" />
                                        <input name='number' type="number" placeholder="Phone Number" className="my-4 input input-bordered w-full max-w-xs" />
                                        <input name='address' type="text" placeholder="Address" className="my-4 input input-bordered w-full max-w-xs" />
                                        <input name='totalorder' type="number" placeholder="Total Order" className="my-4 input input-bordered w-full max-w-xs" />
                                        {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                                        <div className="modal-action">
                                            <input type="submit" className="btn" value="Submit" />
                                            {/* <label htmlFor="service-modal" className="btn">Yay!</label> */}
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;