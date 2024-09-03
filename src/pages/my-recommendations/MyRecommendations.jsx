import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [myRecommendations, setMyRecommendations] = useState([]);
    console.log(myRecommendations);
    let count = 1;

    useEffect(() => {
        axios.get(`http://localhost:5000/myRecommendations?email=${user.email}`)
            .then(res => {
                console.log(res.data);
                setMyRecommendations(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const handleDeleteRecommendation = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/deleteRecommendations/${_id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Success",
                                text: "You have successfully deleted your recommendation!",
                                icon: "success"
                            });
                        }

                        const remaining = myRecommendations.filter(each => each._id !== _id);
                        setMyRecommendations(remaining);
                    })
                    .catch(error => {
                        console.log(error);

                        Swal.fire({
                            title: "Error",
                            text: `${error.code || error.message}`,
                            icon: "error"
                        });
                    })
            }
        });

    }

    return (
        <div className='my-20'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Title</th>
                            <th>Product Name</th>
                            <th>Recommendation Time </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myRecommendations.map(each => <tr key={each._id}>
                                <th>{count++}</th>
                                <td>{each.RecommendationTitle}</td>
                                <td>{each.RecommendedProductName}</td>
                                <td>{each.recommendationCurrentDate}</td>
                                <td onClick={() => handleDeleteRecommendation(each._id)}
                                    className='cursor-pointer text-rose-600 font-bold'
                                >Delete</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;