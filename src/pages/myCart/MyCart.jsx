import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const MyCart = () => {

    const loadedData = useLoaderData();
    const [allCartData, setAllCartData] = useState(loadedData)

    return (
        <div className='container mx-auto p-1'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                {allCartData.length > 0 ?
                    allCartData.map((product, idx) => (
                        <Cart key={idx} product={product} allCartData={allCartData} setAllCartData={setAllCartData}></Cart>
                    ))
                    :
                    <div className='h-[50vh] flex items-center justify-center'>
                        <h2 className='text-center font-bold text-2xl md:text-3xl'>No Product Added Yet to your cart</h2>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyCart;