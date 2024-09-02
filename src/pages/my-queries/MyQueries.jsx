import React from 'react';
import { Link } from 'react-router-dom';

const MyQueries = () => {
    return (
        <div>
            {/* add query banner section */}
            <section>
                <Link to="/addQuery">
                    <button className='btn btn-primary'>Add Query</button>
                </Link>
            </section>

            {/* my query section */}
            <section>

            </section>
        </div>
    );
};

export default MyQueries;