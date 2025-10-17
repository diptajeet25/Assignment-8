import React from 'react';
import logo from '../../assets/logo.png'
import github from '../../assets/github.png'
import { NavLink } from 'react-router';
import "./Navbar.css"


const Navbar = () => {
    const link=
    <>
<li className='text-lg'>
  <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
    Home
  </NavLink>
</li>

<li className='text-lg'>
  <NavLink to="/apps"  className={({ isActive }) => (isActive ? "active" : "")}>
    Apps
  </NavLink>
</li>

<li className='text-lg'>
  <NavLink to="/installed"  className={({ isActive }) => (isActive ? "active" : "noactive")}>
    Installation
  </NavLink>
</li>

    </>
    return (
        <div className="navbar bg-white text-black shadow-sm px-2 lg:px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 font-bold w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <NavLink to="/" id="logo" className="btn btn-ghost text-xl"><img src={logo} className='h-10' alt="" /><span className='text-2xl text-purple-600'>HERO.IO</span></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to="https://github.com/diptajeet25" className="btn btn-primary"><img src={github} className='h-6 mr-1' alt="" />Contribute</NavLink>
  </div>
</div>
    );
};

export default Navbar;