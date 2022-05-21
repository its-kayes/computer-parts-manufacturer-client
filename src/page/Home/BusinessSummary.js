import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className=' text-5xl font-bold text-center text-teal-400 mt-28 '> PEOPLE TRUST OUR BUSINESS </h1>
            <h3 className='text-2xl font-bold text-center my-6'> WE TRY TO UNDERSTAND OUR CUSTOMERS </h3>
            <progress class="progress w-2/4 flex mx-auto justify-center"></progress>
            <div className='flex justify-around my-28'>
                <div>
                    <p> <i class="fa-solid fa-shop text-7xl my-7 text-teal-400 "></i> </p>
                    <p className='text-5xl font-bold py-3'> 160+ </p>
                    <p className='text-3xl text-teal-400'>Shops</p>
                </div>
                <div>
                    <p> <i class="fa-solid fa-earth-asia text-7xl my-7 text-teal-400 "></i> </p>
                    <p className='text-5xl font-bold py-3'> 90+ </p>
                    <p className='text-3xl text-teal-400'>Countries</p>
                </div>
                <div>
                    <p> <i class="fa-solid fa-user-check text-7xl my-7 text-teal-400 "></i> </p>
                    {/* <div class="radial-progress bg-teal-400 text-primary-content border-4 border-teal" style={{"--value": "70"}}>70%</div> */}
                    <p className='text-5xl font-bold py-3'> 360k </p>
                    <p className='text-3xl text-teal-400'>Reviews</p>
                </div>
                <div className=''>
                    <p> <i class="fa-solid fa-phone-volume text-7xl my-7 text-teal-400 "></i> </p>
                    <p className='text-5xl font-bold py-3'> 24/7 </p>
                    <p className='text-3xl text-teal-400'>Help Line</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;