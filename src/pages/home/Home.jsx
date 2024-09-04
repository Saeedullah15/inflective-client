import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import RecentQueries from './RecentQueries';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <RecentQueries></RecentQueries>
            <Faq></Faq>
        </div>
    );
};

export default Home;