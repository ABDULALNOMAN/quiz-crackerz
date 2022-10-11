import React from 'react';

const Card = ({ item }) => {
    const {logo,name,total}=item
    return (
        <div className='flex flex-col '>
            <div className=" w-full bg-cyan-800 shadow-xl p-4 rounded-t-md">
                <figure><img className='' src={logo} alt="Shoes" /></figure>
                <div className=" flex flex-row justify-between my-5 text-white">
                    <h2 className="text-2xl font-bold ">{name}</h2>
                    <p>total: {total}</p>
                </div>
            </div>
            <div>
                <button className=' font-bold capitalize text-orange-400 bg-green-800 w-full py-1'>click</button>
            </div>
        </div>
    );
};

export default Card;