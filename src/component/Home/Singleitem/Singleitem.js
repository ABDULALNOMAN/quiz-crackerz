import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';

const Singleitem = () => {
    const quizItem = useLoaderData()
    const { data } = quizItem
    const { name,questions} = data
    return (
        <div className='container mx-auto'>
            <h1 className='text-center'>{name}</h1>
            <div className='border border-gray-900'>
                {
                    questions.map(data=><Quiz key={data.id} data={data}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Singleitem;