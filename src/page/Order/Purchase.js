import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderModal from './OrderModal';

const Purchase = () => {

    let [part, setPart] = useState();
    let { id } = useParams();

    let url = `http://localhost:5000/parts/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])

    return (
        <div>
            <h2> Ghu kha </h2>
            <div>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={part?.img} class="max-w-sm rounded-lg shadow-2xl" />
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
                                    <div class="modal-box">
                                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                        <div class="modal-action">
                                            <label for="my-modal-6" class="btn">Yay!</label>
                                        </div>
                                    </div>
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