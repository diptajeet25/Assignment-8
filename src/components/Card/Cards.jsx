import React, { use } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router';

const Cards = ({trendApps}) => {
    const navigate=useNavigate();
    const appsData=use(trendApps);
   
    return (
        <div className="flex flex-col justify-center items-center gap-4 mb-16">
            <div className='grid w-[90%] gap-4 gap-y-8 mx-auto grid-cols-1 lg:grid-cols-4'>
                {
                    appsData.map(app=> <Card key={app.id} app={app}></Card> )
                }
            </div>
            <button onClick={()=>navigate("/apps")} className="btn btn-primary text-2xl mt-4 p-4 py-6">Show More</button>
        </div>
    );
};

export default Cards;