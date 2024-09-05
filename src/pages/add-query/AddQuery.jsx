import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const AddQuery = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL, } = user;
    const currentDate = new Date().toLocaleString();
    console.log(currentDate);
    const recommendationCount = 0;

    const handleAddQuery = (e) => {
        e.preventDefault();

        const form = e.target;
        const ProductName = form.ProductName.value;
        const ProductBrand = form.ProductBrand.value;
        const ProductImage = form.ProductImage.value;
        const QueryTitle = form.QueryTitle.value;
        const Reason = form.Reason.value;
        // console.log(ProductName, ProductBrand, ProductImage, QueryTitle, Reason);

        const newQueryInfo = { ProductName, ProductBrand, ProductImage, QueryTitle, Reason, UserName: displayName, UserEmail: email, UserImage: photoURL, currentDate, recommendationCount };

        axios.post("http://localhost:5000/addQuery", newQueryInfo, { withCredentials: true })
            .then(res => {
                console.log(res.data);

                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "You have successfully added your query!",
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
    }

    return (
        <div>
            <div className="my-5 lg:my-20">
                <div className="card bg-base-100 shadow-2xl md:w-1/2 mx-auto">
                    <div className="text-center lg:text-left mt-8">
                        <h1 className="text-3xl font-bold mb-4 text-center">Add Your Query</h1>
                    </div>

                    <form onSubmit={handleAddQuery} className="card-body">
                        <div className="form-control space-y-4">
                            <input type="text" name='ProductName' placeholder="Product Name" className="input input-bordered" />

                            <input type="text" name='ProductBrand' placeholder="Product Brand" className="input input-bordered" />

                            <input type="text" name='ProductImage' placeholder="Product Image(url)" className="input input-bordered" />

                            <input type="text" name='QueryTitle' placeholder="Query Title" className="input input-bordered" />

                            <textarea name="Reason" id="" placeholder="Boycotting Reason Details" cols="30" rows="5" className="border border-gray-300 rounded-lg p-2"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddQuery;