import React, { useContext } from 'react';
import PropTypes from "prop-types"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../shared/contextApi/AuthProvider';
const Brands = ({ brand, intemNo }) => {
    const { user } = useContext(AuthContext)

    const navigate = useNavigate();
    const handleBrand = (brand) => {
        const lowerbrand = brand.toLowerCase();
        {
            user ? navigate(`/products/${lowerbrand}`) : navigate("/login")
        }

    }
    return (
        <div className='border p-2 rounded-lg shadow group bg-gray-100'>
            <div className='duration-150 relative'>
                <img src={brand?.brandImg} alt={brand?.brandName} className='rounded-lg' />
                <span className='w-10 h-10 flex justify-center items-center font-bold text-xl absolute top-2 left-2 rounded-full bg-white'>{intemNo}</span>
                <div className='absolute top-0 flex items-center px-4 justify-center h-full bg-[#000000b6] invisible group-hover:visible flex-col text-white cursor-pointer rounded-lg'>
                    <p className=''>{brand?.desc}</p>
                    <Link className='btn btn-secondary mt-2' onClick={() => handleBrand(brand?.brandName)}>View All</Link>
                </div>
            </div>
            <h2 className="text-xl md:text-3xl mt-3 font-bold uppercase text-center">{brand?.brandName}</h2>
        </div>
    );
};
Brands.propTypes = {
    brand: PropTypes.object,
    intemNo: PropTypes.number
}
export default Brands;