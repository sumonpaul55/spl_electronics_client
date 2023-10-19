import React from 'react';
import PropTypes from "prop-types"
const Slideritem = ({ product }) => {
    return (
        <div className='md:p-10 w-full flex flex-col md:flex-row gap-5'>
            <div className='w-full md:w-1/2'>
                <img src={product.porductImg} alt="" className='w-full' />
            </div>
            <div className="content">
                <h1 className="md:text-5xl top-2 left-2 pb-10 font-semibold">Super offer Get <span className='text-secondary p-2 font-bold'>upto 35%</span> Discount</h1>
                <p className='md:max-w-[500px]'>{product.desc}</p>
                <div className='mt-5 space-x-5'>
                    <button className='btn btn-secondary'>Buy Now</button>
                    <button className='btn btn-secondary'>View Details</button>
                </div>
            </div>
        </div>
    );
};
Slideritem.propTypes = {
    product: PropTypes.object
}
export default Slideritem;