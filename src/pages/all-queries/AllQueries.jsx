import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQueriesEachCard from './AllQueriesEachCard';

const AllQueries = () => {
    const data = useLoaderData();
    console.log(data);

    // const handleSearch = (e) => {
    //     console.log(e.target.value);
    //     const searchText = e.target.value;

    //     axios.get(`http://localhost:5000/allQueries?searchText=${searchText}`)
    // }

    return (
        <div className='mt-10'>
            {/* <div className='flex justify-center items-center space-x-2'>
                <input type="text" onChange={handleSearch} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
            </div> */}

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