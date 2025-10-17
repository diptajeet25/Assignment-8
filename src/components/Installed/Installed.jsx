import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getItem, removeItem } from '../../utilities/localStorage';
import InstalledCard from './InstalledCard';

const Installed = () => {
    const appData=useLoaderData();
    const installedAppsId=getItem();
    const installedApps=appData.filter(app=>installedAppsId.includes(app.id))
    const[installed,setInstalled]=useState(installedApps);


    const handleUninstall = (id) => {
        removeItem(id);
        const newArray = installed.filter(app => app.id !== id);
        setInstalled(newArray);
    
    }
    const highToLow=()=>
    {
        
        const newArray=[...installed].sort((a,b)=>parseFloat(b.downloads)-parseFloat(a.downloads));
        setInstalled(newArray)
        
    }
    const lowToHigh=()=>
    {
         
        const newArray=[...installed].sort((a,b)=>parseFloat(a.downloads)-parseFloat(b.downloads));
        setInstalled(newArray) 
        
    }
    return (
        <div className='min-h-svh'>
        <div className='my-16'>
            <h3 className='text-black text-3xl text-center font-bold'>Installed Application</h3>
            <p className='text-lg text-gray-500 text-center'>
  Browse all your installed apps and manage them easily. Stay organized with just a click!
</p></div>
        <div className='mx-3 mt-12  flex justify-between items-center lg:w-[68%] lg:mx-auto'>
            <h3 className='font-bold text-2xl text-black'>{installed.length} Apps Found</h3>
            <select defaultValue="" className="bg-white w-44 border-black border-1 text-black select appearance-none" onChange={(e)=>
                {
                    if(e.target.value==="HighToLow")
                    {
                        highToLow();
                    }
                   else if(e.target.value === "LowToHigh")
                    {
                        lowToHigh();
                    }
                }
            }>
  <option disabled={true} value="">Sort By Download</option>
  <option value="HighToLow">High-Low</option>
  <option value="LowToHigh">Low-High</option>
  
</select>
        </div>
        <div className='flex flex-col gap-4 my-3 mb-24 lg:w-[70%] mx-auto'>
            {
                installed.map(i=><InstalledCard key={i.id} i={i} handleUninstall={handleUninstall}></InstalledCard>)
            }
            
        </div>
        </div>
    );
};

export default Installed;