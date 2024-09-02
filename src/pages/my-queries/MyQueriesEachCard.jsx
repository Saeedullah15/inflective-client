import React from 'react';
import { Link } from 'react-router-dom';

const MyQueriesEachCard = ({ query }) => {
    console.log(query);
    const { _id, QueryTitle, UserName, currentDate } = query;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{QueryTitle}</h2>
                <p>{UserName}</p>
                <p>{currentDate}</p>
                <div className="card-actions justify-end">
                    <Link to={``}>
                        <button className="btn btn-info">View Details</button>
                    </Link>
                    <button className="btn btn-success">Update</button>
                    <button className="btn btn-warning">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyQueriesEachCard;