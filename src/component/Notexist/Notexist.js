import React from 'react';
import { Link } from 'react-router-dom';

const Notexist = () => {
    return (
        <div className=' text-center translate-y-48 relative'>
            <div className='text-2xl'>
                <h1 className='text-9xl font-bold'>404</h1>
                <h2>not found</h2>
                <p><Link to={'/'}><span className='text-blue-800 decoration-solid underline'>click </span></Link>to return to home</p>
            </div>
        </div>
    );
};

export default Notexist;