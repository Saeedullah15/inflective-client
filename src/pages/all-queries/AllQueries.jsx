import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQueriesEachCard from './AllQueriesEachCard';

const AllQueries = () => {
    const data = useLoaderData();
    const [queries, setQueries] = useState(data);
    const [searchText, setSearchText] = useState('');
    console.log(data);

    const handleSearch = () => {
        axios.get(`http://localhost:5000/allQueries?searchText=${searchText}`)
            .then(res => {
                console.log(res.data);
                setQueries(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center space-x-2'>
                <input type="text"
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        handleSearch(); // for real-time search
                    }}
                    placeholder="Search By Product Name"
                    className="input input-bordered w-full max-w-xs"
                />
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
            </div>

            <section className='grid grid-cols-3 mt-10 max-w-6xl mx-auto gap-10'>
                {
                    queries.map(eachData => <AllQueriesEachCard
                        key={eachData._id}
                        eachData={eachData}
                    ></AllQueriesEachCard>)
                }
            </section>
        </div>
    );
};

export default AllQueries;