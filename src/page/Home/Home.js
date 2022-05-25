import React from 'react';
import Parts from '../Shared/Parts';
import Reviews from '../Shared/Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Customer from './Customer';
import OurCEO from './OurCEO';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div className='bg-black text-white pb-20'>
            <Banner> </Banner>
            <BusinessSummary> </BusinessSummary>
            <Parts>  </Parts>
            <div className='flex items-center'>
                <Reviews> </Reviews>
                <Customer> </Customer>
            </div>
            <OurCEO> </OurCEO>
            <Subscribe> </Subscribe>
        </div>
    );
};

export default Home;