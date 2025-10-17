import React from 'react';
import error from "../../assets/error-404.png"
import { NavLink } from 'react-router';


const ErrorPage = () => {
    return (
        <div>
            <img src={error} alt="" className='w-[25%] my-8 mx-auto'/>
            <div className=' flex justify-center'>
            <NavLink to="/" className="btn btn-primary w-36 my-2 mb-6">Back To Home</NavLink>
            </div>
  
            
        </div>
    );
};

export default ErrorPage;