import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "Success",
                    text: "Login Successful!",
                    icon: "success"
                });

                navigate("/");
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

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "Success",
                    text: "Login Successful!",
                    icon: "success"
                });

                navigate("/");
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
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                </div>

                <div className="card bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/register" className="label-text-alt link link-hover">Didn't have any account? <span className='text-blue-600'>Register</span></a>
                            </label>
                            <p className='my-1 text-gray-500'>----------------- OR ----------------</p>
                            <p onClick={handleGoogle} className='flex justify-center mt-4'>
                                <FcGoogle className='text-3xl cursor-pointer' />
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;