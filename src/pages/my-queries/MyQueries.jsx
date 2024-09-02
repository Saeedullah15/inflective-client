import React from 'react';
import { Link } from 'react-router-dom';

const MyQueries = () => {
    return (
        <div>
            <Link to="/addQuery">
                <button className='btn btn-primary'>Add Query</button>
            </Link>
        </div>
    );
};

export default MyQueries;