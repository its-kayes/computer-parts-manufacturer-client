import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;