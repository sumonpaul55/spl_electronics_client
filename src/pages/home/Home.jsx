import React, { useState } from 'react';
import Banner from './banner/Banner';
import Brands from './brands/Brands';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedData = useLoaderData();
    const [bsix, setBsix] = useState(6)
    let sixData = loadedData.slice(0, bsix)
    const allDataDisplay = () => {
        setBsix(loadedData.length)
    }
    return (
        <div>
            <Banner></Banner>
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
            </section >

        </div >
    );
};

export default Home;