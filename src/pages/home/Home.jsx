import React, { useContext, useState } from 'react';
import Banner from './banner/Banner';
import Brands from './brands/Brands';
import { TbTruckDelivery } from "react-icons/tb"
import { MdOutlinePriceCheck, MdRealEstateAgent } from "react-icons/md"
import { useLoaderData } from 'react-router-dom';
import headePhone from "../../assets/headphone.jpg"
import { AuthContext } from '../../shared/contextApi/AuthProvider';
const Home = () => {
    const { theme } = useContext(AuthContext)
    const loadedData = useLoaderData();
    const [bsix, setBsix] = useState(6)
    let sixData = loadedData.slice(0, bsix)
    const allDataDisplay = () => {
        setBsix(loadedData.length)
    }

    return (
        <div data-theme={theme}>
            <Banner></Banner>
            <section className='py-10 md:py-20 bg-teal-400'>
                <div className="container mx-auto px-1">
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-16'>
                        <div className='flex items-center w-full'>
                            <div className='px-5'>
                                <span className='p-5 lg:p-8 bg-white block rounded-full text-3xl text-secondary md:text-7xl'><TbTruckDelivery /></span>
                            </div>
                            <div className='text-white'>
                                <h3 className="text-xl md:text-3xl font-bold pb-2">Fast Delivery</h3>
                                <p className='text-slate-100'>We provider our clients fast and quick deliver</p>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <div className='px-5'>
                                <span className='p-5 lg:p-8 bg-white block rounded-full text-3xl text-secondary md:text-7xl'><MdOutlinePriceCheck /></span>
                            </div>
                            <div className='text-white'>
                                <h3 className="text-xl md:text-3xl font-bold pb-2">Low Price guarantee</h3>
                                <p className='text-slate-100'>We can give You gurantee that We can Sell Products maximum low price</p>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <div className='px-5'>
                                <span className='p-5 lg:p-8 bg-white block rounded-full text-3xl text-secondary md:text-7xl'><MdRealEstateAgent /></span>
                            </div>
                            <div className='text-white'>
                                <h3 className="text-xl md:text-3xl font-bold pb-4">Certified Product</h3>
                                <p className='text-slate-100'>We Provide Certified Product</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className='py-10 md:py-20 bg-slate-100'>
                <div className="container mx-auto px-1">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Discover Excellence in Electronics Brand</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-16 mt-20'>
                        {
                            sixData.map((brand, idx) => (
                                <Brands key={brand._id} brand={brand} intemNo={idx + 1}></Brands>
                            ))
                        }
                    </div>
                    <div className='mt-10 text-center'>
                        {loadedData.length > bsix && <button className='btn btn-secondary mx-auto' onClick={allDataDisplay}>View All Categories</button>}
                    </div>
                </div>
            </section>
            {/* section for offer */}
            <section className='py-20 px-1 bg-slate-200'>
                <div className="container mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Special Offer</h1>
                    <p className='mt-1'>Up to 50% Discount for the following products. </p>
                    <div className='grid grid-cols1 lg:grid-cols-2 gap-5 md:gap-10 mt-10'>
                        <div>
                            <img src={headePhone} alt="headePhone" />
                        </div>
                        <div className='space-y-5'>
                            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Super Headphone from sony</h1>
                            <p className='font-bold'>price: $300</p>
                            <p>Coupon code: <span className='text-secondary px-3 py-2 bg-white'>dkE#$%4</span></p>
                            <p>Get up to 45% discout using the avobe coupon</p>
                            <div className='flex gap-4'>
                                <button className='btn btn-secondary'> Buy Now</button>
                                <button className='btn btn-secondary'>Viwe Detail Now</button>
                            </div>
                            <p>Elevate your auditory experience to a new level with the Sony WH-1000XM4 headphones. Crafted with precision and innovation, these headphones are designed to transport you into a world of unparalleled audio quality, ultimate comfort, and smart features. Whether you re a music enthusiast, a frequent traveler, or simply looking to immerse yourself in sound like never before, the Sony WH-1000XM4 is your perfect companion.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20 px-1'>
                <div className="container mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">All of Our Products</h1>
                    <p className='mt-1'>Up to 50% Discount for the following products. </p>
                    {

                    }
                </div>
            </section>
        </div >
    );
};

export default Home;