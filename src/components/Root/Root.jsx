import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation } from 'react-router';

const Root = () => {
    const navigation=useNavigation();
    const isNavigating=Boolean(navigation.location);
    
    return (
        <div>
            <Navbar></Navbar>
            {isNavigating && <span className="loading loading-dots loading-xl"></span>}
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;