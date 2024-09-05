import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import b1 from "../../assets/b1.jpg";
import { AuthContext } from '../../providers/AuthProvider';
import MyQueriesEachCard from './MyQueriesEachCard';

const MyQueries = () => {
    const { user } = useContext(AuthContext);
    const [queries, setQueries] = useState([]);
    // console.log(queries.length);

    useEffect(() => {
        axios.get(`https://inflective-server.vercel.app/myQueries?email=${user.email}`, { withCredentials: true })
            .then(res => {
                // console.log(res.data);
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
                axios.delete(`https://inflective-server.vercel.app/deleteQuery/${_id}`, { withCredentials: true })
                    .then(res => {
                        // console.log(res.data);

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
                        // console.log(error);

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
        <div className='my-5 lg:my-20'>
            {/* add query banner section */}
            <section className=''>
                <div className='lg:my-20 max-w-6xl mx-auto relative'>
                    <img src={b1} className='w-full h-96 rounded-2xl' alt="" />
                    <div className='absolute top-0 left-0 bg-gradient-to-r w-full h-full rounded-2xl from-[#27272a00] to-black flex justify-center items-center flex-col'>
                        <h2 className='text-3xl font-bold mb-2 text-white'>
                            Welcome to Inflective!
                        </h2>
                        <p className='text-xl mb-10 text-white'>Your Concern And Feedback Matters To Us, Add Your Valuable Query!</p>
                        <Link to="/addQuery">
                            <button className='btn btn-primary'>Add Query</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* my query section */}
            <section>
                {
                    queries.length === 0 ?
                        <div className='flex justify-center items-center gap-2'>
                            <h2 className='font-bold text-2xl'>You Currently Have No Queries!</h2>
                            <Link to="/addQuery">
                                <button className='link text-xl link-secondary'>Add Your Query</button>
                            </Link>
                        </div>
                        :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 max-w-7xl mx-auto gap-10'>
                            {
                                queries.map(query => <MyQueriesEachCard
                                    key={query._id}
                                    query={query}
                                    handleDeleteQuery={handleDeleteQuery}
                                ></MyQueriesEachCard>)
                            }
                        </div>
                }
            </section>
        </div>
    );
};

export default MyQueries;