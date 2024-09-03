import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQueriesEachCard from './AllQueriesEachCard';

const AllQueries = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <section className='grid grid-cols-3 mt-10 max-w-7xl mx-auto gap-10'>
                {
                    data.map(eachData => <AllQueriesEachCard
                        key={eachData._id}
                        eachData={eachData}
                    ></AllQueriesEachCard>)
                }
            </section>
        </div>
    );
};

export default AllQueries;