import React, { } from 'react';
import PropTypes from "prop-types"
import { Link, useParams } from 'react-router-dom';
const Product = ({ product }) => {
    const { productName, brandName, porductImg, desc, price } = product;
    const brand = useParams();
    console.log(product)



    return (
        <div>
            <div className='p-3 bg-stone-50 shadow gap-5 flex-col sm:flex-row rounded-xl space-y-5 flex items-center justify-center'>
                <img src={porductImg} className="w-full sm:w-1/2" alt="" />
                <div className=''>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">{productName}</h2>
                    <div className='flex text-lg justify-between font-semibold'>
                        <h3>Brands: {brandName}</h3>
                        <p>price: ${price ? price : "Free"}</p>
                    </div>
                    <p className='text-sm mt-3'>{desc.slice(0, 70)}</p>
                    <div className='flex justify-between pt-3 gap-2'>
                        <Link to={`/product/${brand}/`}> <button className='btn btn-secondary px-2'>View more</button></Link>
                        <button className='btn btn-secondary px-2'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object,
    name: PropTypes.string
}
export default Product;