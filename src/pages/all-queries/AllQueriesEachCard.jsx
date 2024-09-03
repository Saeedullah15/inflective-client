import React from 'react';
import { Link } from 'react-router-dom';

const AllQueriesEachCard = ({ eachData }) => {
    console.log(eachData);

    const { ProductImage, QueryTitle, ProductName, ProductBrand, Reason, currentDate, UserName, UserImage, recommendationCount, _id } = eachData;

    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-20">
            <figure>
                <img src={UserImage} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{QueryTitle}</h2>
                <p>{ProductName}</p>
                <p>{ProductBrand}</p>
                <p>{Reason}</p>
                <p>{currentDate}</p>
                <p>{UserName}</p>
                <p>{recommendationCount}</p>
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