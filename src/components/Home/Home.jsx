import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Card/Cards';

const Home = () => {
    const trendApps=fetch("/trendApps.json").then(res=>res.json())
    return (
        <div>
            
            <Banner></Banner>
            <div className='w-[80%] mx-auto text-black flex flex-col items-center my-10 gap-1'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p className='text-lg text-gray-500'>Explore all Trending Apps on the Market developed by us.</p>
            </div>
            <Suspense fallback={<p>Loading</p>}>
<Cards trendApps={trendApps}></Cards>
            </Suspense>
        </div>
    );
};

export default Home;