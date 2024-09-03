import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const QueryDetails = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const [recomCount, setRecomCount] = useState(data.recommendationCount);
    const { displayName, email } = user;
    const recommendationCurrentDate = new Date().toLocaleString();

    const { ProductBrand, ProductImage, ProductName, QueryTitle, Reason, UserEmail, UserImage, UserName, currentDate, recommendationCount, _id } = data;

    const handleAddRecommendation = (e) => {
        e.preventDefault();

        const form = e.target;
        const RecommendationTitle = form.RecommendationTitle.value;
        const RecommendedProductName = form.RecommendedProductName.value;
        const RecommendedProductImage = form.RecommendedProductImage.value;
        const RecommendationReason = form.RecommendationReason.value;
        // console.log(RecommendationTitle, RecommendedProductName, RecommendedProductImage, RecommendationReason);

        const newRecommendation = { RecommendationTitle, RecommendedProductName, RecommendedProductImage, RecommendationReason, QueryId: _id, QueryTitle, ProductName, UserEmail, UserName, RecommenderEmail: email, RecommenderName: displayName, recommendationCurrentDate };

        axios.post("http://localhost:5000/addRecommendation", newRecommendation)
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

        axios.put(`http://localhost:5000/updateRecommendationCount/${_id}`, recommendationCount)
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
        <div className='text-center'>
            <div>
                <h2 className='font-bold'>Query Information:</h2>
                <img src={ProductImage} alt="" />
                <h3>{ProductBrand}</h3>
                <h3>{ProductName}</h3>
                <h3>{QueryTitle}</h3>
                <h3>{Reason}</h3>
                <h2>{currentDate}</h2>
                <h3>Recommendation Count: {recomCount}</h3>
            </div>

            <div>
                <h2 className='font-bold'>Query Created By:</h2>
                <h3>{UserEmail}</h3>
                <h3>{UserName}</h3>
                <img className='w-20 mx-auto' src={UserImage} alt="" />
            </div>

            <div>
                <div className="my-20">
                    <div className="card bg-base-100 shadow-2xl w-1/2 mx-auto">
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

            <div>
                <h2 className='font-bold mb-10'>All Recommendations</h2>
            </div>
        </div>
    );
};

export default QueryDetails;