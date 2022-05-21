import React from 'react';
import Parts from '../Shared/Parts';
import Reviews from '../Shared/Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Banner> </Banner>
            <BusinessSummary> </BusinessSummary>
            <Parts>  </Parts>
            <Reviews> </Reviews>
            <Subscribe> </Subscribe>
        </div>
    );
};

export default Home;