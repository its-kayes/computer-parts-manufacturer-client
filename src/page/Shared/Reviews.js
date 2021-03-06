import React, { useEffect, useState } from 'react';

const Reviews = () => {

    let [reviews, setReviews] = useState();

    useEffect(() => {
        fetch('https://enigmatic-lake-23819.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <p className='text-center text-3xl font-mono font-bold mt-20 mb-10'> Our Clients Reviews </p>
            <div className='parts'>
                {
                    reviews?.map(review => <div class="max-w-sm bg-slate-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center py-10">
                            <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={review?.img} />
                            <h5 class="text-white mb-1 text-xl font-medium dark:text-white ">{review.name}</h5>
                            <span class="text-white text-sm font-mono dark:text-gray-400 text-center px-2">{review.description}</span>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Reviews;