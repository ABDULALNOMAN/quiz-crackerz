import React, { createContext } from 'react';
import Quizvalue from './Quizvalue/Quizvalue';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CallContext = createContext()
const Quiz = ({ data }) => {
    const { correctAnswer, question, options } = data
    console.log(data)
    const handleCheck = (option) => {
        const item = correctAnswer === option;
        console.log(item)
        if (item) {
            toast('true')
        }
        else {
            toast('false')
        }
    } 
    const handleTrue = () => {
        toast(correctAnswer)
    }
    return (
        <CallContext.Provider value={handleCheck}>
            <div className='text-center mt-10 p-6 rounded-3xl shadow-md shadow-cyan-600 relative' data-theme={'night'}>
                <h1 className='text-2xl mt-4'>{question}</h1>
                <div className='absolute top-2 right-2'>
                    <EyeIcon onClick={handleTrue} className='h-6 w-6'></EyeIcon>
                    <ToastContainer></ToastContainer>
                </div>
                <div className='grid grid-cols-2 gap-3 mt-10'>
                    {
                        options.map(option => <Quizvalue option={option}></Quizvalue>)
                    }
                </div>
            </div>
        </CallContext.Provider>
    );
};

export default Quiz;