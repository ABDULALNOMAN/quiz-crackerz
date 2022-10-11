import React from 'react';
import Quizvalue from './Quizvalue/Quizvalue';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ data }) => {
    const { question, options } = data
    return (
        <div className='text-center mt-10 p-6 rounded-3xl shadow-md shadow-cyan-600 relative' data-theme={'night'}>
            <h1 className='text-2xl mt-4'>{question}</h1>
            <div className='absolute top-2 right-2'>
                <EyeIcon className='h-6 w-6'></EyeIcon>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-10'>
                {
                    options.map(option => <Quizvalue option={option}></Quizvalue>)
                }
            </div>
        </div>
    );
};

export default Quiz;