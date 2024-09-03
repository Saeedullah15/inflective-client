import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const UpdateMyQuery = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    // console.log(data);
    const { ProductBrand, ProductImage, ProductName, QueryTitle, Reason, _id } = data;

    // const { displayName, email, photoURL, } = user;
    const currentDate = new Date().toLocaleString();
    // console.log(currentDate);
    // const recommendationCount = 0;

    const handleUpdateQuery = (e) => {
        e.preventDefault();

        const form = e.target;
        const ProductName = form.ProductName.value;
        const ProductBrand = form.ProductBrand.value;
        const ProductImage = form.ProductImage.value;
        const QueryTitle = form.QueryTitle.value;
        const Reason = form.Reason.value;
        // console.log(ProductName, ProductBrand, ProductImage, QueryTitle, Reason);

        const updateQueryInfo = { ProductName, ProductBrand, ProductImage, QueryTitle, Reason, currentDate };

        axios.put(`http://localhost:5000/updateQuery/${_id}`, updateQueryInfo)
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success",
                        text: "You have successfully updated your query!",
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
            <div className="my-20">
                <div className="card bg-base-100 shadow-2xl w-1/2 mx-auto">
                    <div className="text-center lg:text-left mt-8">
                        <h1 className="text-3xl font-bold mb-4 text-center">Want To Update Your Query?</h1>
                    </div>

                    <form onSubmit={handleUpdateQuery} className="card-body">
                        <div className="form-control space-y-4">
                            <input type="text" name='ProductName' defaultValue={ProductName} className="input input-bordered" />
                            <input type="text" name='ProductBrand' defaultValue={ProductBrand} className="input input-bordered" />
                            <input type="text" name='ProductImage' defaultValue={ProductImage} className="input input-bordered" />
                            <input type="text" name='QueryTitle' defaultValue={QueryTitle} className="input input-bordered" />
                            <textarea name="Reason" id="" defaultValue={Reason} cols="30" rows="5" className="border border-gray-300 rounded-lg p-2"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateMyQuery;