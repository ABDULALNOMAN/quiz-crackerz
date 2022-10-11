import React from 'react';

const Quizvalue = ({ option }) => {
    return (
        <div className='border p-3 text-lg rounded-md hover:bg-cyan-700 hover:text-white'>
            <p>{option}</p>
        </div>
    );
};

export default Quizvalue;