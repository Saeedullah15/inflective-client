import React from 'react';
import Banner from './Banner';
import RecentQueries from './RecentQueries';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <RecentQueries></RecentQueries>
        </div>
    );
};

export default Home;