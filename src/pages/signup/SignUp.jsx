import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/contextApi/AuthProvider';
import Swal from 'sweetalert2';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { updateProfile } from 'firebase/auth';

const Login = () => {
    const { signUp } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            Swal.fire("Password should be more than 6 carachter!");
        } else if (!/[A-Z]/.test(password)) {
            Swal.fire("Password should contains atleast one Capital letter")
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            Swal.fire("Password should contains atleast on special character")
        } else {
            signUp(email, password)
                .then(res => {
                    console.log(res.user)
                    updateProfile(res.user, {
                        displayName: name
                    }).then(() => {
                        res && Swal.fire("You have successfully signed in");
                    }).catch()
                    navigate("/")
                })
                .catch(err => {
                    err && Swal.fire({ title: `<span class="text-red-800">${err.code}</span>` });
                })

        }
    }
    return (
        <div className='py-20 dark:bg-slate-700 p-1'>
            <div className="mt-10">
                <h2 className='text-center mb-20 font-bold text-xl md:text-2xl lg:text-4xl dark:text-white'>Register</h2>
                <div className="card-body shadow-2xl bg-base-100 max-w-[500px] mx-auto p-2 md:p-10">
                    <form className="space-y-5" onSubmit={handleSignup}>
                        <div className="form-control">
                            <label className="label" htmlFor=''>
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered w-full" required />
                                <span className='absolute top-3 cursor-pointer text-xl right-2' onClick={() => setShow(!show)}>{show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                            </div>
                            <label className="label">
                                <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <input type="submit" value="Sign Up" className='btn btn-secondary w-full' />
                    </form>
                    <div className=''>
                        <h3 className="text-sm">Do you have an account? Please <Link className='text-secondary font-semibold' to="/login">Login</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;