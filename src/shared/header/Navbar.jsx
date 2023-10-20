import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { RxAvatar } from "react-icons/rx"
import "./navbar.css"
import { AiOutlineBars } from "react-icons/ai"
import { AuthContext } from '../contextApi/AuthProvider';
import Swal from 'sweetalert2';
import PrivetRoute from '../routes/PrivetRoute';
import { BsSunFill, BsSun } from "react-icons/bs"
const Navbar = () => {
    const { theme, setTheme } = useContext(AuthContext)
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
    document.body.addEventListener("click", () => {
        setToggleBtn(false)
    })
    const handleShowOptionUser = (e) => {
        e.stopPropagation();
        setToggleBtn(!toggleBtn)
    }
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else setTheme("light")
    }
    return (

        <nav className='bg-grya-100 shadow relative'>
            <div className="container mx-auto p-1">
                <div className='flex items-center justify-between'>
                    <div className="logo">
                        <Link to="/"><img src={logo} className='w-28 sm:w-40 md:w-52' alt="SCP electronics" /></Link>
                    </div>
                    <div className={`absolute bg-emerald-500 h-screen lg:h-auto lg:w-auto lg:static lg:flex-row lg:bg-transparent top-12 w-full flex-col items-center justify-center flex gap-7 duration-200 z-50 ${toggle ? "left-0" : "-left-full"}`}>
                        <NavLink className="font-bold" to="/" onClick={() => setToggle(!toggle)}>Home</NavLink>
                        {
                            <PrivetRoute>
                                <NavLink className="font-bold" to="/add-product" onClick={() => setToggle(!toggle)}>Add Product</NavLink>
                                <NavLink className="font-bold" to="/my-cart" onClick={() => setToggle(!toggle)}>My Cart</NavLink>
                            </PrivetRoute>
                        }
                        <NavLink className="font-bold" to="/login" onClick={() => setToggle(!toggle)}>Login</NavLink>
                    </div>
                    <div className='flex items-center gap-1 relative cursor-pointer' onClick={handleShowOptionUser}>
                        {
                            user?.photoURL ? <img src={user.photoURL} alt="" referrerPolicy="no-referrer" className='w-8 rounded-full' /> : <span className='text-xl'><RxAvatar /></span>
                        }
                        {
                            !loading && user?.displayName ? <h3 className='text-sm md:text-lg font-bold'>{user.displayName}</h3> : <h3 className="text-lg font-bold">User</h3>
                        }
                        <div className={`absolute p-3 bg-gray-300 top-[130%] left-[50%] -translate-x-[50%] w-full  ${toggleBtn ? "block" : "hidden"}`}>
                            {
                                user ?
                                    <div>
                                        <button onClick={handleLogout} className='hover:btn-secondary w-full'>Log Out</button>
                                        <Link to="/addBrand" className='hover:btn-secondary w-full my-2 block text-center'>Add Brands</Link>
                                    </div>
                                    : <Link to="/login">Login</Link>}
                        </div>
                    </div>
                    <div className='block lg:hidden'>
                        <span className='text-2xl cursor-pointer' onClick={() => setToggle(!toggle)}><AiOutlineBars /></span>
                    </div>
                    <button className='' onClick={toggleTheme}>
                        <span>
                            {
                                theme === "light" ? <BsSunFill /> : <BsSun />
                            }
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;