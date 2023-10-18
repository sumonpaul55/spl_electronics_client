import React from 'react';
import "./banner.css"
import applead from "../../../assets/bannerApple.png"
const Banner = () => {
    return (
        <section className='banner-bg'>
            <div className="container mx-auto px-1 flex items-center">
                <div className="content space-y-8 my-auto grid grid-cols-1 lg:grid-cols-7 gap-6 items-center">
                    <div className='lg:col-span-4 pt-10 lg:pt-0'>
                        <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-bold mb-0 md:mb-20">Electronics Excellence at Your Fingertips!</h1>
                        <p className='text-slate-300 mt-2'>Welcome to <span className='text-secondary'>SCP Electronics</span>, your one-stop destination for all things electronic! Explore a world of innovation, where cutting-edge technology meets affordability. Discover the latest smartphones, laptops, gaming gear, and a myriad of gadgets designed to enhance your digital lifestyle.</p>
                        <div className='text-white mt-5'>
                            <h3 className='md:text-2xl font-bold'>Our Product Categories</h3>
                            <p className='capitallize text-secondary'>apple, xioami, oppo, Samsung, Sony, Intel</p>
                        </div>
                        <div className='mt-5 space-x-5'>
                            <button className='btn btn-secondary'>Explore More</button>
                            <button className='btn btn-secondary'>Buy Now</button>
                        </div>
                    </div>
                    <div className='lg:col-span-3'>
                        <img src={applead} className='w-full' alt="Apple watch" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;