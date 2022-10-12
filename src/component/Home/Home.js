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
                <div className="flex lg:h-96 items-center md:flex-row flex-col justify-between md:pt-10">
                    <h1 className='text-6xl text-center font-bold capitalize text-sky-800 pt-10 justify-items-start justify-self-start'>Test your <span className='italic text-cyan-600'>knowledge</span></h1>
                    <img className='lg:w-full md:w-96' src="undraw_Questions_re_1fy7-removebg-preview.png" alt="" />
                 </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 lg:mx-0 mx-20 gap-6 mt-10'>
                    {
                        data.map(item=><Card key={item.id} item={item}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;