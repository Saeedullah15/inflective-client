import axios from 'axios';
import React, { useState } from 'react';
import { TfiLayoutColumn2Alt, TfiLayoutColumn3Alt, TfiLayoutColumn4Alt } from "react-icons/tfi";
import { useLoaderData } from 'react-router-dom';
import AllQueriesEachCard from './AllQueriesEachCard';

const AllQueries = () => {
    const data = useLoaderData();
    const [queries, setQueries] = useState(data);
    const [searchText, setSearchText] = useState('');
    const [layout, setLayout] = useState("lg:grid-cols-3 md:grid-cols-2 grid-cols-1");
    // console.log(data);

    const handleSearch = () => {
        axios.get(`https://inflective-server.vercel.app/allQueries?searchText=${searchText}`)
            .then(res => {
                // console.log(res.data);
                setQueries(res.data);
            })
            .catch(error => {
                // console.log(error);
            })
    }

    return (
        <div className='mt-10 max-w-6xl mx-auto'>
            <div className='flex justify-between'>
                <div className='flex space-x-2 w-full md:w-1/2'>
                    <input type="text"
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            handleSearch(); // for real-time search
                        }}
                        placeholder="Search By Product Name"
                        className="input input-bordered w-full"
                    />
                    <button onClick={handleSearch} className="btn btn-primary">Search</button>
                </div>

                {/* layout button */}
                <div className='space-x-2 hidden lg:block'>
                    <button onClick={() => setLayout("grid-cols-2")} className='btn btn-outline btn-success'>
                        <TfiLayoutColumn2Alt className='text-xl' />
                    </button>
                    <button onClick={() => setLayout("grid-cols-3")} className='btn btn-outline btn-success'>
                        <TfiLayoutColumn3Alt className='text-xl' />
                    </button>
                    <button onClick={() => setLayout("grid-cols-4")} className='btn btn-outline btn-success'>
                        <TfiLayoutColumn4Alt className='text-xl' />
                    </button>
                </div>
            </div>

            <section className={`grid ${layout} my-10 gap-10`}>
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