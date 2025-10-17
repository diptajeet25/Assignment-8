import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';
import NoApp from '../../assets/App-Error.png'

const Apps = () => {
    const useData=useLoaderData();
    
    const[appList,setAppList]=useState(useData);
    const handleSearch=(e)=>
    {
        
        e.preventDefault();
        
        let searchResult = useData.filter(a => 
            a.title.toLowerCase().startsWith(e.target.value.toLowerCase()));
setAppList(searchResult)

if(e.target.value=="")
    setAppList(useData)

    }

    return (
        <div>
           <div className='my-16'>
            <h3 className='text-black text-3xl text-center font-bold'>Our All Application</h3>
            <p className='text-lg text-gray-500 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
           </div>
           <div className='flex justify-between text-black items-center mx-4 lg:mx-12'>
            <p className='text-xl font-bold'>({appList.length}) Apps Found</p>
             <input
        type="text"
        onChange={handleSearch}
        name="search"
        placeholder="🔍 Search apps..."
        className=" px-3 py-1 text-lg  rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all duration-300"
      />
           </div>
           <div className='w-[95%] my-16 mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                appList.length ?
                
                ( 
                appList.map(app=><Card key={app.id} app={app}></Card> )
                ):(<img src={NoApp} className='w-[550px] col-span-full mx-auto block'></img>)
                
            }
           </div>

           
        </div>
    );
};

export default Apps;