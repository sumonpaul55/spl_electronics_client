import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai"

const Login = () => {
    return (
        <div className='container mx-auto p-1'>
            <div className="hero min-h-screen">
                <div className="card-body flex-shrink-0 w-full shadow-2xl bg-base-100 max-w-[500px]">
                    <form className="space-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                    <div className=''>
                        <h3 className="text-sm">Are you new here? Please <Link className='text-secondary' to="sign-up">Sign Up</Link></h3>
                        <h2 className='mt-3 border-t pt-2 font-semibold'>Login with following Social media</h2>
                        <div className='bg-slate-100 p-3 flex items-center   justify-center mt-3 gap-3 cursor-pointer text-xl rounded-md'>
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