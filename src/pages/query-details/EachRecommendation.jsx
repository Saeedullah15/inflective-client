import React from 'react';

const EachRecommendation = ({ eachRecommendation }) => {
    console.log(eachRecommendation);

    const { RecommendedProductImage, recommendationCurrentDate, RecommendedProductName, RecommendationTitle, RecommendationReason } = eachRecommendation;

    return (
        <div className='border-2 border-orange-500 shadow-xl p-4'>
            <h3>{RecommendedProductName}</h3>
            <h3>{RecommendationTitle}</h3>
            <h3>{recommendationCurrentDate}</h3>
        </div>
    );
};

export default EachRecommendation;