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
         console.log("Sort Korsi re vai")
        const newArray=[...installed].sort((a,b)=>parseFloat(b.downloads)-parseFloat(a.downloads));
        setInstalled(newArray)
        console.log("Sort Korsi re vai")
    }
    const lowToHigh=()=>
    {
         console.log("Sort Korsi re vai")
        const newArray=[...installed].sort((a,b)=>parseFloat(a.downloads)-parseFloat(b.downloads));
        setInstalled(newArray)
        console.log(" choto theke boro Sort Korsi re vai")
    }
    return (
        <>
        <div className='mx-3 mt-4 flex justify-between items-center'>
            <h3 className='font-bold text-2xl text-black'>{installed.length} Apps Found</h3>
            <select defaultValue="" className="bg-white w-44  text-black select appearance-none" onChange={(e)=>
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
        <div className='flex flex-col gap-4 my-4 lg:w-[70%] mx-auto'>
            {
                installed.map(i=><InstalledCard key={i.id} i={i} handleUninstall={handleUninstall}></InstalledCard>)
            }
            
        </div>
        </>
    );
};

export default Installed;