import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        // profile updated
                    })
                    .catch(error => {
                        // console.log(error);
                    })

                Swal.fire({
                    title: "Success",
                    text: "You have registered successfully!",
                    icon: "success"
                });

                navigate("/");
            })
            .catch(error => {
                // console.log(error);

                Swal.fire({
                    title: "Error",
                    text: `${error.code} | ${error.message}`,
                    icon: "error"
                });
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">Please Register!</h1>
                </div>

                <div className="card bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo(url)</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                            </div>

                            <label className="label">
                                <a href="/login" className="label-text-alt link link-hover">Already have an account? <span className='text-blue-600'>Login</span></a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;