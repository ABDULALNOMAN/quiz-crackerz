import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { CallContext } from '../Quiz';

const Quizvalue = ({ option }) => {
    const handleCheck = useContext(CallContext)
    return (
        <div>
            <button onClick={() => handleCheck(option)} className='w-full h-full border p-3 text-lg rounded-md hover:bg-cyan-700 hover:text-white'>{option}</button>
            <ToastContainer />
        </div>
    );
};

export default Quizvalue;