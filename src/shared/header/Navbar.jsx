import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
const Navbar = () => {
    return (
        <nav className='bg-grya-100 shadow'>
            <div className="container mx-auto p-1">
                <div className='flex items-center justify-between'>
                    <div className="logo">
                        <img src={logo} className='w-52' alt="SCP electronics" />
                    </div>
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/add-product">Add Product</NavLink>
                        <NavLink to="/my-cart">My Cart</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;