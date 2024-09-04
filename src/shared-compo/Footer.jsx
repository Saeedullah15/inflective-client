import React from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            {/* <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> */}
            <a href='/' className="text-3xl font-bold flex justify-center items-center">
                <img src={logo} className='w-6' alt="" />
                Inflective
            </a>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaFacebook className='text-2xl'></FaFacebook>
                    </a>
                    <a>
                        <FaLinkedin className='text-2xl'></FaLinkedin>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Inflective.</p>
            </aside>
        </footer>
    );
};

export default Footer;