
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-cyan-700 text-white'>
            <div className="navbar flex justify-between container mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-3xl font-bold italic">queezy</a>
                </div>
                <div className="navbar-end hidden md:flex">
                    <div>
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to={'/'}>Topics</Link></li>
                            <li><Link to={"/status"}>Statistics</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="dropdown mr-6">
                     <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-700 rounded-box w-52">
                        <li><Link to={'/'}>Topics</Link></li>
                        <li><Link to={"/status"}>Statistics</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;