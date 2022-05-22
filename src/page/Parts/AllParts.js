import React from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../../hook/useParts';


const AllParts = () => {

    let parts = useParts();
    let navigate = useNavigate();

    let orderNow = id => {
        navigate(`/purchase/${id}`)
        console.log(id);      
    }

    return (
        <div>
            <h1 className='text-5xl font-mono font-bold my-20 text-center'> Available Parts Thats We Provide </h1>

            <div>
                <div className='parts my-20'>
                    {
                        parts?.map(part => <div key={part.id} class="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={part.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title text-teal-400 ">{part.name}</h2>
                                <p className='font-bold'> Price: {part.price} (Per item) </p>
                                <div className='flex font-semibold'>
                                    <p>Stock: {part.stock}</p>
                                    <p>Minimum Order: {part.minOrder} piece</p>
                                </div>
                                <p> {part.description} </p>
                                <div class="card-actions justify-end">
                                    <button onClick={() => orderNow(part._id)} class="btn btn-primary">Order Now</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

                {/* <div className='card-actions justify-end'>
                    <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        SEE ALL PARTS
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div> */}
            </div>

        </div>
    );
};

export default AllParts;