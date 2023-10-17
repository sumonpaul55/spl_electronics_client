import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import "./navbar.css"
import { AiOutlineBars } from "react-icons/ai"
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='bg-grya-100 shadow relative'>
            <div className="container mx-auto p-1">
                <div className='flex items-center justify-between'>
                    <div className="logo">
                        <img src={logo} className='w-52' alt="SCP electronics" />
                    </div>
                    <div className={`absolute bg-emerald-500 h-screen lg:h-auto lg:w-auto lg:static lg:flex-row lg:bg-transparent top-14 w-full flex-col items-center justify-center flex gap-7 duration-200 z-50 ${toggle ? "left-0" : "-left-full"}`}>
                        <NavLink className="font-bold" to="/" onClick={() => setToggle(!toggle)}>Home</NavLink>
                        <NavLink className="font-bold" to="/add-product" onClick={() => setToggle(!toggle)}>Add Product</NavLink>
                        <NavLink className="font-bold" to="/my-cart" onClick={() => setToggle(!toggle)}>My Cart</NavLink>
                        <NavLink className="font-bold" to="/login" onClick={() => setToggle(!toggle)}>Login</NavLink>
                    </div>
                    <div className='flex items-center'>
                        <img src="" alt="user" />
                        <h3 className="text-lg font-bold">User</h3>
                    </div>
                    <div className='block lg:hidden'>
                        <span className='text-2xl cursor-pointer' onClick={() => setToggle(!toggle)}><AiOutlineBars /></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;