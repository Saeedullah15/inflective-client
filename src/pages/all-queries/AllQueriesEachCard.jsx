import React from 'react';
import { Link } from 'react-router-dom';

const AllQueriesEachCard = ({ eachData }) => {
    // console.log(eachData);

    const { ProductImage, QueryTitle, ProductName, ProductBrand, Reason, currentDate, UserName, UserImage, recommendationCount, _id } = eachData;

    return (
        <div className="card card-compact bg-base-100 shadow-xl lg:mb-20">
            <figure>
                <img src={UserImage} className='w-full h-40' alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="font-bold">{QueryTitle}</h2>
                <hr className='' />
                <img src={ProductImage} className='w-20 h-20' alt="" />
                <p>Product Name: {ProductName}</p>
                <p>Product Brand: {ProductBrand}</p>
                <p>Boycotting Reason: {Reason}</p>
                <hr />
                <p>Posted On: {currentDate}</p>
                <p>Posted By: {UserName}</p>
                <p>Recommendation Count: {recommendationCount}</p>
                <div className="card-actions justify-end">
                    <Link to={`/queryDetails/${_id}`}>
                        <button className="btn btn-primary">Recommend</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllQueriesEachCard;