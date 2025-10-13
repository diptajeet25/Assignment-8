import React from 'react';
import playsstore from '../../assets/playastore.png';
import appstore from '../../assets/appstore.png';
import hero from '../../assets/hero.png';

const Banner = () => {
    return (
        <>
        <div className='flex justify-center items-center flex-col w-[90%] lg:w-[60%] mx-auto mt-8'>
            <h2 className='text-4xl font-bold text-black'>We Build <span className='text-purple-600'>Productive </span>Apps</h2>
            <p className='text-black'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='mt-4'>
                <button className='btn btn-outline btn-secondary mr-4'><img src={playsstore} alt="" className='h-4' />Play Store</button>
                <button className='btn btn-outline btn-secondary'><img src={appstore} alt="" className='h-4' />App Store</button>
            </div>
            
        </div>

        <img src={hero} alt="" className='mt-10 w-[90%] lg:w-[50%] mx-auto' />
        <section className="w-full px-4 py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 rounded-lg">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
     
          <div className="py-6 md:py-0">
            <p className="text-sm uppercase tracking-wider text-white/90">
              Total Downloads
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold mt-2">29.6M</h3>
            <p className="text-xs mt-1 text-white/80">
              21% More Than Last Month
            </p>
          </div>

          {/* Total Reviews */}
          <div className="py-6 md:py-0">
            <p className="text-sm uppercase tracking-wider text-white/90">
              Total Reviews
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold mt-2">906K</h3>
            <p className="text-xs mt-1 text-white/80">
              46% More Than Last Month
            </p>
          </div>

          {/* Active Apps */}
          <div className="py-6 md:py-0">
            <p className="text-sm uppercase tracking-wider text-white/90">
              Active Apps
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold mt-2">132+</h3>
            <p className="text-xs mt-1 text-white/80">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
        </>
    );
};

export default Banner;