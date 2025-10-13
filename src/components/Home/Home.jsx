import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className='w-[80%] mx-auto text-black flex flex-col items-center my-10 gap-1'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p className='text-lg text-gray-500'>Explore all Trending Apps on the Market developed by us.</p>
            </div>
        </div>
    );
};

export default Home;