import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from "../assets/logo.png";
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allQueries">Queries</NavLink></li>
        {
            user && <ul className='flex'>
                <li><NavLink to="/RecommendationsForMe">Recommendations For Me</NavLink></li>
                <li><NavLink to="/MyQueries">My Queries</NavLink></li>
                <li><NavLink to="/MyRecommendations">My Recommendations</NavLink></li>
            </ul>
        }
    </>

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                // sign out successful
                Swal.fire({
                    title: "Success",
                    text: "Log Out Successful!",
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
        <div className="navbar bg-base-100">
            {/* nav start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {/* nav item for small device */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a href='/' className="text-2xl font-bold flex justify-center items-center">
                    <img src={logo} className='w-20' alt="" />
                    Inflective
                </a>
            </div>

            {/* nav center */}
            <div className="navbar-center hidden lg:flex">
                {/* nav items for large device */}
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            {/* nav end */}
            <div className="navbar-end">
                {
                    user ?
                        <a onClick={handleLogOut} className="btn">Log Out</a>
                        :
                        <Link className='btn' to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;