import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetail = () => {
    const product = useLoaderData();
    console.log(product)
    const { porductImg, productName, productType, desc, price, brandName } = product
    return (
        <section className='py-20 bg-slate-300 px-1'>
            <div className="container mx-auto">
                <div className='flex flex-col md:flex-row gap-10 items-center md:gap-20 justify-between'>
                    <div className='max-w-[600px]'>
                        <h2 className="text-xl md:text-3xl lg:text-5xl capitalize font-bold">{productName}</h2>
                        <h2 className="text-xl text-secondary font-semibold mt-5"><span className='font-bold text-black'>Brand:</span> {brandName}</h2>
                        <h2 className="text-xl mt-10 font-thin bg-secondary text-white inline-block px-2">Type: {productType}</h2>
                        <p className='py-5 text-slate-600'>{desc}</p>
                        <p className='mt-10 font-bold text-3xl text-secondary'>Price: ${price}</p>
                        <div className="btn btn-secondary mt-5">Add To Cart</div>
                    </div>
                    <img src={porductImg} alt="" className='md:w-1/2' />
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;