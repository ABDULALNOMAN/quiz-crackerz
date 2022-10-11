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
                        <li><Link to={'/'}>home</Link></li>
                        <li><Link to={"/status"}>Item 2</Link></li>
                        <li><Link to={'/blog'}>Item 3</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;