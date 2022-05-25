import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../hook/useParts';
import './parts.css';

const Parts = () => {
    // let [parts, setParts] = useState();

    // useEffect(()=> {
    //     fetch('parts.json')
    //     .then(res => res.json())
    //     .then(data => setParts(data));
    // }, [])
    let parts = useParts();
    let navigate = useNavigate();

    let homItemsId = 3
    let homeItems = parts?.filter(item => item.postId === homItemsId);

    let orderNow = id => {
        navigate(`/purchase/${id}`)
        console.log(id);      
    }

    return (
        <div className='rounded-3xl border-2 text-white bg-teal-700'>
            {/* <p> {homeItems?.length} </p> */}
            <h1 className='text-4xl text-center mt-10 font-bold underline font-mono'> PARTS THAT WE PROVIDES  </h1>

            <div className='parts my-20 '>
                {
                    homeItems?.map(part => <div key={part.id} class="bg-slate-800 card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={part.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-teal-400 ">{part.name}</h2>
                            <p className='font-bold'> Price: {part.price} (Per item) </p>
                            <div className='flex font-semibold'>
                                <p>Stock: {part.stock}</p>
                                <p>Minimum buy: {part.minOrder} piece</p>
                            </div>
                            <p> {part.description} </p>
                            <div class="card-actions justify-end">
                                <button onClick={()=> orderNow(part._id)} class="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className='card-actions justify-end'>
                <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    SEE ALL PARTS
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>

        </div>
    );
};

export default Parts;