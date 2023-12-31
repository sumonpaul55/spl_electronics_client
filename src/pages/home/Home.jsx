import React, { useContext, useEffect, useState } from 'react';
import Banner from './banner/Banner';
import Brands from './brands/Brands';
import { TbTruckDelivery } from "react-icons/tb"
import { MdOutlinePriceCheck, MdRealEstateAgent } from "react-icons/md"
import { useLoaderData } from 'react-router-dom';
import headePhone from "../../assets/headphone.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AuthContext } from '../../shared/contextApi/AuthProvider';
const Home = () => {
    // const { loading } = useContext(AuthContext)
    const loadedData = useLoaderData();
    const [bsix, setBsix] = useState(6)
    const [cartNumber, setCartNumber] = useState(0)
    const { user } = useContext(AuthContext)
    let sixData = loadedData.slice(0, bsix)
    const allDataDisplay = () => {
        setBsix(loadedData.length)
    }
    const [categoryData, setCategoryData] = useState([])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 0 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // getting categroy data
    useEffect(() => {
        fetch("https://scp-electronics-server.vercel.app/upcomming-category")
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [])


    useEffect(() => {
        fetch(`https://scp-electronics-server.vercel.app/myCart-total/${user.email}`)
            .then(res => res.json())
            .then(data => setCartNumber(data))
    }, [user])
    // console.log(categoryData)
    // console.log(cartNumber)
    return (
        <>
            {

                <div className='dark:bg-black dark:text-white'>
                    <div className=' bg-red-700 py-2 total-cart z-50 rotate-90 px-2 text-white rounded-full font-bold fixed -right-16 top-1/3'>
                        <h1 className=''>Total Cart Items = {cartNumber?.length}</h1>
                    </div>
                    <Banner></Banner>
                    <section className='py-10 md:py-20 bg-teal-400 dark:bg-black'>
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
                    <section className='py-10 md:py-20 bg-slate-100 dark:bg-black'>
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
                    <section className='py-20 px-1 bg-slate-200 dark:bg-gray-800'>
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
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-20">Our Upcomming Categories</h1>
                            <Carousel
                                // autoPlay={true}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}

                                autoPlaySpeed={1000}
                                keyBoardControl={true}>
                                {
                                    categoryData?.map((items, idx) => (
                                        <div key={idx} className="flex gap-5 flex-col md:flex-row justify-center">
                                            <div className="flex-1">
                                                <img src={items?.categoryImgUrl} alt="pixle phone" className="ml-auto" />
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5">{items?.title}</h2>
                                                <p>{items?.details}</p>
                                                <button className="btn btn-secondary mt-10">View Detail</button>
                                            </div>
                                        </div>
                                    ))
                                }

                            </Carousel>
                        </div>
                    </section>
                </div >
            }

        </>
    );
};

export default Home;