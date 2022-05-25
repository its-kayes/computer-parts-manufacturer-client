import React from 'react';
import { Link } from 'react-router-dom';

const OurCEO = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-black">
                <div class=" flex justify-around items-center w-full flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/7GsGMZ9/1640680010421-1.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold font-mono">Here From Our CEO</h1>
                        <p class="pt-6">Our company provide for Parts for your computers.</p>
                        <p>Low price rate. Warty of every product.</p>
                        <p> Top Review on our Parts </p>
                        <p className='pb-6'> Best for you computer </p>
                        <Link to='/allparts' class="btn btn-primary"> Order Our Parts </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCEO;