import React from 'react';

const Subscribe = () => {
    return (
        <div className='mt-20  flex justify-center'>
            {/* <h1 className='text-3xl mb-3'> SUBSCRIBE TO GET ON TIME UPDATE </h1>
            <span className='text-lg'> We are not share your email with anyone </span> */}

            <div className="card w-2/4 border-2 p-8 bg-black text-white">
                <div className=''>
                    <h1 className='font-bold mb-4 text-xl'> Get more updates... </h1>
                    <p> Do you want to get notified when a new part is added to our Website? Sign up for our newsletter and you'll be among the first to find out about new product, parts  , versions, and tools. </p>
                </div>
                <form className='flex justify-center mt-6'>
                    <input name='email' type="email" id="default-search" className="block w-full p-4    l-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Mail Address" required="" />
                    <button type='submit' className="text-white ml-3 right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                </form>
                <p className='mt-2'> By subscribing, you agree with our Terms of Service and Privacy Policy. </p>
            </div>

        </div>
    );
};

export default Subscribe;