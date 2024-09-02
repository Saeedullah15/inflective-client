import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import MyQueriesEachCard from './MyQueriesEachCard';

const MyQueries = () => {
    const { user } = useContext(AuthContext);
    const [queries, setQueries] = useState([]);
    console.log(queries);

    useEffect(() => {
        axios.get(`http://localhost:5000/myQueries?email=${user.email}`)
            .then(res => {
                console.log(res.data);
                setQueries(res.data);
            })
    }, [])

    return (
        <div className='my-20'>
            {/* add query banner section */}
            <section className='flex justify-center'>
                <Link to="/addQuery">
                    <button className='btn btn-primary'>Add Query</button>
                </Link>
            </section>

            {/* my query section */}
            <section className='grid grid-cols-3 mt-10 max-w-7xl mx-auto gap-10'>
                {
                    queries.map(query => <MyQueriesEachCard
                        key={query._id}
                        query={query}
                    ></MyQueriesEachCard>)
                }
            </section>
        </div>
    );
};

export default MyQueries;