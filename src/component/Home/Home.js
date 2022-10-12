import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';
import'./Home.css'


const Home = () => {
    const quizData = useLoaderData()
    const { data } = quizData
    return (
        <div className='bg-sky-300 w-full h-full pb-10'>
            <div className='container mx-auto'>
                 <h1 className='text-6xl text-center font-bold capitalize text-sky-800 pt-10'>Test your <span className='italic text-cyan-600'>knowledge</span></h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 lg:mx-0 mx-20 gap-6  mt-10'>
                    {
                        data.map(item=><Card key={item.id} item={item}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;