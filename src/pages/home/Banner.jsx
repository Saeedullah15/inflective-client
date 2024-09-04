import React from 'react';
import { Link } from 'react-router-dom';
import b1 from "../../assets/b1.jpg";

const Banner = () => {
    return (
        <div className='my-20 max-w-6xl mx-auto relative'>
            <img src={b1} className='w-full h-96 rounded-2xl' alt="" />
            <div className='absolute top-0 left-0 bg-gradient-to-r w-full h-full rounded-2xl from-[#27272a00] to-black flex justify-center items-center flex-col'>
                <h2 className='text-3xl font-bold mb-2 text-white'>
                    Curious About What Others Are Asking?
                </h2>
                <p className='text-3xl font-bold mb-10 text-white'>Dive into All Queries!</p>
                <Link to="/allQueries">
                    <button className='btn btn-primary'>Explore Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;