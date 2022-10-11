import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full bg-cyan-700'>
            <div className="navbar container mx-auto text-white" >
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl font-bold italic ">queezy</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
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