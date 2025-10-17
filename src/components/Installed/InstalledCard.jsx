import React from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'

const InstalledCard = ({i,handleUninstall}) => {
    
    const{image,title,downloads,ratingAvg,size,id}=i
  
    return (
        <div className='bg-white mx-2 py-2 px-2 flex justify-between items-center border-2 border-gray-600 rounded-xl'>
            <div className='flex text-black gap-4'>
                <img src={image} alt="" srcset="" className='w-24 rounded-2xl'/>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-black text-2xl font-bold'>{title}</h3>
                    <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <img src={download} alt="" className='w-6'/>
                         <h3 className='text-lg ml-1'>{downloads}</h3>

                    </div>
                    <div className='flex items-center'>
                        <img src={rating} alt="" className='w-6' />
                         <h3 className='text-lg ml-1'>{ratingAvg}</h3>

                    </div>
                    <h3>{size} MB</h3>
                    </div>
                   
                </div>
            </div>
            <button onClick={()=>handleUninstall(id)} className="btn btn-primary mr-4">Uninstall</button>
  
            
            
        </div>
    );
};

export default InstalledCard;