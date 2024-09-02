import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QueryDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { ProductBrand, ProductImage, ProductName, QueryTitle, Reason, UserEmail, UserImage, UserName, currentDate, recommendationCount, _id } = data;

    return (
        <div className='text-center'>
            <img src={ProductImage} alt="" />
            <h3>{ProductBrand}</h3>
            <h3>{ProductName}</h3>
            <h3>{QueryTitle}</h3>
            <h3>{Reason}</h3>
            <h3>{UserEmail}</h3>
            <h3>{UserName}</h3>
            <img className='w-20 mx-auto' src={UserImage} alt="" />
            <h2>{currentDate}</h2>
            <h3>{recommendationCount}</h3>
        </div>
    );
};

export default QueryDetails;