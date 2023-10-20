import React, { useState } from 'react';
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom';
import PrivetRoute from '../routes/PrivetRoute';
const Footer = () => {
    const [toggle, setToggle] = useState(false);

    document.body.addEventListener("click", () => {
        setToggle(false)
    })

    return (
        <section className='pt-32 bg-slate-200 text-white mt-20'>
            <div className="container px-1 mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20'>
                    <div>
                        <img src={logo} alt="logo" />
                        <p className='mt-4 text-slate-600 text-justify'>Discover the future of electronics at SCP Electronics, where innovation meets quality. Explore cutting-edge technologies, find the latest gadgets, and unlock the power of connected living. From smart home solutions to futuristic gizmos, we re your gateway to the electronic wonders of tomorrow. Join us on a journey of limitless possibilities at SCP Electronics.</p>
                    </div>
                    <div className='text-center'>
                        <h1 className="text-xl md:text-2xl text-black font-semibold mb-10">Menu</h1>
                        <div className="flex flex-col gap-5 text-black">
                            <NavLink className="font-bold" to="/" onClick={() => setToggle(!toggle)}>Home</NavLink>
                            {
                                <PrivetRoute>
                                    <NavLink className="font-bold" to="/add-product" onClick={() => setToggle(!toggle)}>Add Product</NavLink>
                                    <NavLink className="font-bold" to="/my-cart" onClick={() => setToggle(!toggle)}>My Cart</NavLink>
                                </PrivetRoute>
                            }
                            <NavLink className="font-bold" to="/login" onClick={() => setToggle(!toggle)}>Login</NavLink>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl text-black font-semibold mb-10">Contact</h1>
                        <form className='space-y-5'>
                            <input type="text" name="name" required id="" placeholder='name' className='w-full p-2 bg-slate-100 rounded-lg' /><br />
                            <input type="email" name="email" required id="" placeholder='Email' className='w-full p-2 bg-slate-100 rounded-lg' /><br />
                            <input type='submit' value="Send" className='btn btn-secondary w-full' /><br />
                        </form>
                    </div>
                    <div>

                        <h1 className="text-xl md:text-2xl text-black font-semibold mb-10">Address</h1>
                        <div className='mt-10 text-black text-xl space-y-3'>
                            <address>44/50 Somewhere in the under wold</address>
                            <p><span className='font-bold'>Phone:</span> 01234586456</p>
                            <p><span className='font-bold'>Email:</span> example@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='py-5 text-center mt-20 bg-black'>© copyright allright reserved SCPElectronics.com</p>
        </section>
    );
};

export default Footer;