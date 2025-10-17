import React from 'react';
import download from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"
import AppDetails from '../AppDetails/AppDetails';
import { useNavigate } from 'react-router';

const Card = ({app}) => {
  const navigate=useNavigate();
   
    const{title,image,downloads,ratingAvg,id}=app
    return (
        <div onClick={()=>navigate(`/apps/${id}`)}>
            <div className="card bg-gray-100 text-black border-1 border-black   shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" className='w-40 p-2 bg-gray-300 m-1 mt-3 rounded-2xl h-40'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{title}</h2>
    <div className='flex items-center justify-between'>
<div className= ' flex font-bold items-center gap-1 p-1 px-2 rounded-lg bg-green-100 text-green-700'><img src={download} className='h-4' alt="" />{downloads}</div>
<div className= ' flex items-center gap-1 p-1 px-2 rounded-lg bg-yellow-100 text-yellow-600 font-bold'><img src={rating} className='h-4' alt="" />{ratingAvg}</div>

    </div>
  </div>
</div>

            
        </div>
    );
};

export default Card;