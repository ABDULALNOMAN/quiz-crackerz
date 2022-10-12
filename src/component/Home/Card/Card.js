import React from 'react';
import { useNavigate } from 'react-router-dom';


const Card = ({ item }) => {
    const {id, logo, name, total } = item
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/home/${id}`)
    }
    return (
        <div className='flex flex-col'>
            <div className=" w-full bg-cyan-800 shadow-xl p-4 rounded-t-md">
                <figure><img className='w-full' src={logo} alt="Shoes" /></figure>
                <div className=" flex flex-row justify-between my-5 text-white">
                    <h2 className="text-2xl font-bold ">{name}</h2>
                    <p>total: {total}</p>
                </div>
            </div>
            <div>
                <button onClick={()=>handleClick(id)} className=' font-bold capitalize text-orange-400 bg-green-800 w-full py-1 hover:bg-green-900'>click</button>
            </div>
        </div>
    );
};

export default Card;