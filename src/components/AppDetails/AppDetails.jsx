import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import iconDownload from '../../assets/icon-downloads.png';
import iconReview from '../../assets/icon-review.png';
import iconRating from '../../assets/icon-ratings.png';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { addItem, getItem } from '../../utilities/localStorage';
import errorImg from '../../assets/App-Error.png'

const AppDetails = () => {
  const params = useParams();
  const data = useLoaderData();

  const [stored, setStored] = useState(false);

  const desiredData = data?.find(d => d.id == params.appsId);
  const ratings = desiredData?.ratings || [];

  useEffect(() => {
    if (!desiredData) return;
    const installedApps = getItem();
    const appFound = installedApps.find(i => i == desiredData.id);
    if (appFound) 
        setStored(true);
  },[desiredData]);

  const handleInstall = () => {
    if (!desiredData) return;
    addItem(desiredData.id);
    setStored(true);
  };

  return (
    <>
      {desiredData ? (
        <div className="w-[90%] mx-auto my-16">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start">
            <img
              src={desiredData.image}
              alt=""
              className="w-64 border-black rounded-2xl border"
            />
            <div>
              <h3 className="text-black text-4xl font-bold">{desiredData.title}</h3>
              <h2 className="text-2xl text-gray-500">
                Developed By <span className="text-purple-700">{desiredData.companyName}</span>
              </h2>

              <div className="flex flex-wrap items-center gap-8 lg:gap-14 my-6">
                <div className="flex flex-col justify-center items-center gap-2 text-black">
                  <img src={iconDownload} alt="" className="w-10" />
                  <span className="text-2xl font-bold">{desiredData.downloads}</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-black">
                  <img src={iconRating} alt="" className="w-10" />
                  <span className="text-2xl font-bold">{desiredData.ratingAvg}</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-black">
                  <img src={iconReview} alt="" className="w-10" />
                  <span className="text-2xl font-bold">{desiredData.reviews}</span>
                </div>
              </div>

              <button
                onClick={handleInstall}
                disabled={stored}
                className={`p-4 font-bold text-xl rounded-2xl transition transform ${
                  stored
                    ? 'bg-gray-300 cursor-not-allowed text-black'
                    : 'bg-green-400 hover:scale-110 text-black duration-300'
                }`}
              >
                {stored ? 'Installed' : `Install Now (${desiredData.size} MB)`}
              </button>
            </div>
          </div>

          <p className="border-t border-dashed border-gray-500 my-4"></p>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ratings} className="p-4">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>

          <h2 className="text-2xl text-black font-bold">Description</h2>
          <p className="text-lg text-gray-500">{desiredData.description}</p>
        </div>
      ) : (
        <div className='w-[40%] flex justify-center mx-auto my-8'>
        <img src={errorImg}></img>
        </div>
      )}
    </>
  );
};

export default AppDetails;
