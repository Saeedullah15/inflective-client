import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import MyQueriesEachCard from './MyQueriesEachCard';

const MyQueries = () => {
    const { user } = useContext(AuthContext);
    const [queries, setQueries] = useState([]);
    console.log(queries);

    useEffect(() => {
        axios.get(`http://localhost:5000/myQueries?email=${user.email}`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setQueries(res.data);
            })
    }, [])

    const handleDeleteQuery = (_id) => {
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
                axios.delete(`http://localhost:5000/deleteQuery/${_id}`, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Success",
                                text: "You have successfully deleted your query!",
                                icon: "success"
                            });
                        }

                        const remaining = queries.filter(query => query._id !== _id);
                        setQueries(remaining);
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
            {/* add query banner section */}
            <section className='flex justify-center'>
                <Link to="/addQuery">
                    <button className='btn btn-primary'>Add Query</button>
                </Link>
            </section>

            {/* my query section */}
            <section className='grid grid-cols-3 mt-10 max-w-7xl mx-auto gap-10'>
                {
                    queries.map(query => <MyQueriesEachCard
                        key={query._id}
                        query={query}
                        handleDeleteQuery={handleDeleteQuery}
                    ></MyQueriesEachCard>)
                }
            </section>
        </div>
    );
};

export default MyQueries;