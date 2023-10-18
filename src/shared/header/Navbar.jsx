import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { RxAvatar } from "react-icons/rx"
import "./navbar.css"
import { AiOutlineBars } from "react-icons/ai"
import { AuthContext } from '../contextApi/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [toggleBtn, setToggleBtn] = useState(false)
    const [toggle, setToggle] = useState(false);
    const handleLogout = () => {
        logOut()
            .then(
                Swal.fire("You have Signed Out")

            ).catch((err) => {
                Swal(`${err}`)
            })
    }
    return (

        <nav className='bg-grya-100 shadow relative'>
            <div className="container mx-auto p-1">
                <div className='flex items-center justify-between'>
                    <div className="logo">
                        <Link to="/"><img src={logo} className='w-52' alt="SCP electronics" /></Link>
                    </div>
                    <div className={`absolute bg-emerald-500 h-screen lg:h-auto lg:w-auto lg:static lg:flex-row lg:bg-transparent top-14 w-full flex-col items-center justify-center flex gap-7 duration-200 z-50 ${toggle ? "left-0" : "-left-full"}`}>
                        <NavLink className="font-bold" to="/" onClick={() => setToggle(!toggle)}>Home</NavLink>
                        <NavLink className="font-bold" to="/add-product" onClick={() => setToggle(!toggle)}>Add Product</NavLink>
                        <NavLink className="font-bold" to="/my-cart" onClick={() => setToggle(!toggle)}>My Cart</NavLink>
                        <NavLink className="font-bold" to="/login" onClick={() => setToggle(!toggle)}>Login</NavLink>
                    </div>
                    <div className='flex items-center gap-1 relative cursor-pointer' onClick={() => setToggleBtn(!toggleBtn)}>
                        {
                            user?.photoURL ? <img src={user.photoURL} alt="" referrerPolicy="no-referrer" className='w-8 rounded-full' /> : <span className='text-xl'><RxAvatar /></span>
                        }
                        {
                            !loading && user?.displayName ? <h3 className='text-lg font-bold'>{user.displayName}</h3> : <h3 className="text-lg font-bold">User</h3>
                        }
                        <div className={`absolute p-5 bg-gray-300 mt-32 hover:bg-gray-400 ${toggleBtn ? "block" : "hidden"}`}>
                            {
                                user ? <button onClick={handleLogout}>Log Out</button> : <Link to="/login">Login</Link>}
                        </div>
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