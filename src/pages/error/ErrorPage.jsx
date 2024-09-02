import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className='text-3xl font-bold mb-6'>404 | Not Found</h1>
            <Link to="/">
                <button className='btn btn-primary'>Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;