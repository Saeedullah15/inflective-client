import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from "../../assets/404.jpg";

const ErrorPage = () => {
    return (
        <div className='text-center'>
            {/* <h1 className='text-3xl font-bold mb-6'>404 | Not Found</h1> */}
            <img src={errorImg} className='w-1/3 mx-auto mb-5' alt="" />
            <Link to="/">
                <button className='btn btn-primary'>Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;