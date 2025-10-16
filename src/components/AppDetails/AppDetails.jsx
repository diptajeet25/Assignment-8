import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import iconDownload from '../../assets/icon-downloads.png'
import iconReview from '../../assets/icon-review.png'
import iconRating from '../../assets/icon-ratings.png'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AppDetails = () => {
    const params=useParams();
    const data=useLoaderData();
   
    const desiredData=data.find(d=>d.id==params.appsId)
    const{image,title,companyName,downloads,reviews,ratingAvg,size,description}=desiredData
    console.log(desiredData)
    const ratings=desiredData.ratings;
    console.log(ratings)
    return (
        <div className='w-[90%] mx-auto my-16'>
           <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 items-start '>
            <img src={image} alt="" className='w-60' />
            <div>
                <h3 className='text-black text-4xl font-bold'>{title}</h3>
                <h2 className=' text-2xl text-gray-500'>Developed By <span className='text-purple-700'>{companyName}</span></h2>

                <div className='flex flex-wrap items-center gap-8  lg:gap-14 my-6'>
                    <div className='flex flex-col justify-center items-center gap-2 text-black'>
                        <img src={iconDownload} alt="" srcset="" className='w-14' />
                        <span className='text-3xl font-bold'>{downloads}</span>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 text-black'>
                        <img src={iconRating} alt="" srcset="" className='w-14'/>
                        <span className='text-3xl font-bold'>{ratingAvg}</span>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 text-black'>
                        <img src={iconReview} alt="" srcset="" className='w-14'/>
                        <span className='text-3xl font-bold'>{reviews}</span>
                    </div>
                </div>
                <button className='bg-green-400 p-4 font-bold text-xl hover:scale-110 transition duration-400 rounded-2xl text-black'>Install Now ({size} MB)</button>
            </div>


           </div>
           <p className='border-t-1 border-dashed border-gray-500 my-4'></p>
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={ratings} className='p-4'>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="count" fill="#8884d8" />
  </BarChart>
</ResponsiveContainer>



           <h2 className='text-2xl text-black font-bold '>Description</h2>
           <p className='text-lg text-gray-500  '>{description}</p>
        </div>
    );
};

export default AppDetails;