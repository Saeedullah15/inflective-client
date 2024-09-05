import React from 'react';

const EachRecommendation = ({ eachRecommendation }) => {
    console.log(eachRecommendation);

    const { RecommendedProductImage, recommendationCurrentDate, RecommendedProductName, RecommendationTitle, RecommendationReason } = eachRecommendation;

    return (
        <div className='flex flex-col md:flex-row gap-4 border-2 border-orange-500 w-full shadow-xl p-4'>
            <img src={RecommendedProductImage} className='w-32 h-32' alt="" />
            <div>
                <h3 className='font-bold'>{RecommendationTitle}</h3>
                <h3>Product Name: {RecommendedProductName}</h3>
                <h3>Recommendation Reason: {RecommendationReason}</h3>
                <h3>Recommended on: {recommendationCurrentDate}</h3>
            </div>
        </div>
    );
};

export default EachRecommendation;