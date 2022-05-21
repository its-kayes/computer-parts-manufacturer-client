import React from 'react';
import Parts from '../Shared/Parts';
import Reviews from '../Shared/Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner> </Banner>

            <BusinessSummary> </BusinessSummary>

            <Parts>  </Parts>

            <Reviews> </Reviews>
        </div>
    );
};

export default Home;