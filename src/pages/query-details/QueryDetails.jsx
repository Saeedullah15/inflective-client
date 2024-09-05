import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import EachRecommendation from './EachRecommendation';

const QueryDetails = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const [recomCount, setRecomCount] = useState(data.recommendationCount);
    const [allRecommendations, setAllRecommendations] = useState([]);
    const { displayName, email } = user;
    const recommendationCurrentDate = new Date().toLocaleString();

    const { ProductBrand, ProductImage, ProductName, QueryTitle, Reason, UserEmail, UserImage, UserName, currentDate, recommendationCount, _id } = data;

    useEffect(() => {
        axios.get(`http://localhost:5000/allRecommendations?queryId=${_id}`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setAllRecommendations(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const handleAddRecommendation = (e) => {
        e.preventDefault();

        const form = e.target;
        const RecommendationTitle = form.RecommendationTitle.value;
        const RecommendedProductName = form.RecommendedProductName.value;
        const RecommendedProductImage = form.RecommendedProductImage.value;
        const RecommendationReason = form.RecommendationReason.value;
        // console.log(RecommendationTitle, RecommendedProductName, RecommendedProductImage, RecommendationReason);

        const newRecommendation = { RecommendationTitle, RecommendedProductName, RecommendedProductImage, RecommendationReason, QueryId: _id, QueryTitle, ProductName, UserEmail, UserName, RecommenderEmail: email, RecommenderName: displayName, recommendationCurrentDate };

        axios.post("http://localhost:5000/addRecommendation", newRecommendation, { withCredentials: true })
            .then(res => {
                console.log(res.data);

                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "You have successfully added your recommendation!",
                        icon: "success"
                    });
                    form.reset();
                }
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: `${error.code || error.message}`,
                    icon: "error"
                });

            })

        axios.put(`http://localhost:5000/updateRecommendationCount/${_id}`, recommendationCount, { withCredentials: true })
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount > 0) {
                    let newRecommendationCount = recomCount + 1;
                    setRecomCount(newRecommendationCount);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='max-w-6xl mx-auto mt-10'>
            <div className='flex flex-col md:flex-row gap-20'>
                {/* query info div */}
                <div className='md:w-1/2'>
                    <div className=''>
                        <h2 className='font-bold text-2xl mb-3'>Query Information:</h2>
                        <img src={ProductImage} className='w-1/4' alt="" />
                        <h3 className='text-xl font-bold'>{QueryTitle}</h3>
                        <h3>Product Brand: {ProductBrand}</h3>
                        <h3>Product Name: {ProductName}</h3>
                        <h3>Boycotting Reason: {Reason}</h3>
                        <h2>Posted On: {currentDate}</h2>
                        <h3>Recommendation Count: {recomCount}</h3>
                    </div>
                    <div className='mt-10'>
                        <h2 className='font-bold text-2xl mb-3'>Query Created By:</h2>
                        <img className='w-20 h-20' src={UserImage} alt="" />
                        <h3>{UserEmail}</h3>
                        <h3>{UserName}</h3>
                    </div>
                </div>

                {/* form div */}
                <div className='md:w-1/2'>
                    <div className="">
                        <div className="card bg-base-100 shadow-2xl">
                            <div className="text-center lg:text-left mt-8">
                                <h1 className="text-3xl font-bold mb-4 text-center">Add Your Recommendation</h1>
                            </div>

                            <form onSubmit={handleAddRecommendation} className="card-body">
                                <div className="form-control space-y-4">
                                    <input type="text" name='RecommendationTitle' placeholder="Recommendation Title" className="input input-bordered" />

                                    <input type="text" name='RecommendedProductName' placeholder="Recommended Product Name" className="input input-bordered" />

                                    <input type="text" name='RecommendedProductImage' placeholder="Recommended Product Image(url)" className="input input-bordered" />

                                    <textarea name="RecommendationReason" id="" placeholder="Recommendation reason" cols="30" rows="5" className="border border-gray-300 rounded-lg p-2"></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Recommendation</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-20'>
                <h2 className='font-bold mb-10 text-3xl'>All Recommendations</h2>
                <div className='space-y-4'>
                    {
                        allRecommendations.map(eachRecommendation => <EachRecommendation
                            key={eachRecommendation._id}
                            eachRecommendation={eachRecommendation}
                        ></EachRecommendation>)
                    }
                </div>
            </div>
        </div>
    );
};

export default QueryDetails;