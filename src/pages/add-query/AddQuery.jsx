import React from 'react';

const AddQuery = () => {
    const handleAddQuery = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="my-20">
                <div className="card bg-base-100 shadow-2xl w-1/2 mx-auto">
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