import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart/Chart';


const Status = () => {
    const LoderItem = useLoaderData()
    const { data } = LoderItem
    return (
        <div className='w-screen h-80 mt-20 pr-10'>
            <Chart data={data}></Chart>
        </div>
    );
};

export default Status;