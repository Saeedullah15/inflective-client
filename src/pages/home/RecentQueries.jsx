import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RecentQueries = () => {
    const [queries, setQueries] = useState([]);
    // console.log(queries);

    useEffect(() => {
        axios.get("https://inflective-server.vercel.app/allQueries")
            .then(res => {
                // console.log(res.data);
                setQueries(res.data);
            })
    }, [])

    return (
        <div className='mb-20 max-w-6xl mx-auto'>
            <h2 className='text-center font-bold text-3xl text-black mb-8'>Some Recently Added Post</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    queries.slice(0, 6).map(each => <div key={each._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img src={each.UserImage} className='w-full h-40' alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="font-bold">{each.QueryTitle}</h2>
                            <hr />
                            <img src={each.ProductImage} className='w-20 h-20' alt="" />
                            <p>Product Name: {each.ProductName}</p>
                            <p>Product Brand: {each.ProductBrand}</p>
                            <p>Boycotting Reason: {each.Reason}</p>
                            <hr />
                            <p>Posted On: {each.currentDate}</p>
                            <p>Posted By: {each.UserName}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;