import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const RecommendationsForMe = () => {
    const { user } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);
    // console.log(recommendations);
    let count = 1;

    useEffect(() => {
        axios.get(`https://inflective-server.vercel.app/recommendations?email=${user.email}`, { withCredentials: true })
            .then(res => {
                // console.log(res.data);
                setRecommendations(res.data);
            })
            .catch(error => {
                // console.log(error);
            })
    }, [])

    return (
        <div className='my-20'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Recommendation Title</th>
                            <th>Recommended Product Name</th>
                            <th>Recommended By</th>
                            <th>Recommended on</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recommendations.map(each => <tr key={each._id}>
                                <th>{count++}</th>
                                <td>{each.RecommendationTitle}</td>
                                <td>{each.RecommendedProductName}</td>
                                <td>{each.RecommenderName}</td>
                                <td>{each.recommendationCurrentDate}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecommendationsForMe;