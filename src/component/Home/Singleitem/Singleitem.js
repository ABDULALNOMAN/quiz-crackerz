import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';

const Singleitem = () => {
    const quizItem = useLoaderData()
    const { data } = quizItem
    const { name, questions } = data
    return (
        <div className='bg-sky-300 '>
            <div className='container mx-auto pt-4'>
                <h1 className='text-center text-3xl font-bold'>{name}</h1>
                <div className=''>
                    {
                        questions.map(data=><Quiz key={data.id} data={data}></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Singleitem;