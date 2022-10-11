import React from 'react';
import Quizvalue from './Quizvalue/Quizvalue';

const Quiz = ({ data }) => {
    const { question, options } = data
    return (
        <div className='border '>
            <h1>{question}</h1>
            {
                options.map(option => <Quizvalue option={option}></Quizvalue>)
            }
        </div>
    );
};

export default Quiz;