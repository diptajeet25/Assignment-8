import React from 'react';
import error from "../../assets/error-404.png"

const ErrorPage = () => {
    return (
        <div>
            <img src={error} alt="" className='w-[28%] my-8 mx-auto'/>
            
        </div>
    );
};

export default ErrorPage;