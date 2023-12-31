import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { AuthContext } from '../../shared/contextApi/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { login, user, signInwithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const [show, setShow] = useState(false)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        !user ? login(email, password)
            .then(result => {
                Swal.fire(result.user && { title: "You have logged in successfully", icon: "success" })
                navigate("/")
            })
            .catch((err) => {
                err && Swal.fire({ title: "Email or Password may have wrong", icon: "error" })
            }) : Swal.fire("Your Already logged in")
        form.reset();
    }
    const handlegoogleLogin = () => {
        signInwithGoogle(provider)
            .then(res => {
                res.user && Swal.fire({ title: "You have logged in with google", icon: 'success' })
                navigate("/")
            }).catch(err => {
                Swal.fire({ title: `something went wrong with ${err}`, icon: "error" })
            })
    }
    return (
        <div className='p-1 dark:bg-slate-700 py-20 dark:text-white'>
            <div className="mt-20">
                <h2 className="text-xl md:text-3xl lg:text-5xl text-center font-bold mb-10">Login</h2>
                <div className="card-body shadow-2xl max-w-[500px] mx-auto">
                    <form className="space-y-5" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered dark:text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text font-semibold dark:text-white">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered w-full dark:text-black" required />
                                <span className='absolute top-3 cursor-pointer text-xl right-2' onClick={() => setShow(!show)}>{show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover dark:text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                    <div className=''>
                        <h3 className="text-sm">Are you new here? Please <Link className='text-secondary text-lg md:text-xl' to="/sign-up">Register</Link></h3>
                        <h2 className='mt-3 border-t pt-2 font-semibold'>Login with following Social media</h2>
                        <div className='bg-slate-100 p-3 flex items-center dark:bg-black justify-center mt-3 gap-3 cursor-pointer text-xl rounded-md' onClick={handlegoogleLogin}>
                            <span className=''><AiFillGoogleCircle /></span>
                            <span>Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;