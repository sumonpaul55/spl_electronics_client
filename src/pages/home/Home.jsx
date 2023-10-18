import React, { } from 'react';
import Banner from './banner/Banner';
import Brands from './brands/Brands';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedData = useLoaderData();
    const sixBrand = loadedData.slice(0, 6)
    return (
        <div>
            <Banner></Banner>
            <section className='py-10 md:py-20 bg-slate-100'>
                <div className="container mx-auto px-1">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Discover Excellence in Electronics Brand</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-16 mt-20'>
                        {
                            sixBrand.map((brand, idx) => (
                                <Brands key={brand._id} brand={brand} intemNo={idx + 1}></Brands>
                            ))
                        }
                    </div>
                </div>
            </section>

        </div >
    );
};

export default Home;