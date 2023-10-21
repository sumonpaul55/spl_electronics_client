import React, { useContext, useState } from 'react';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import ReactStars from 'react-rating-star-with-type'
import Swal from 'sweetalert2';
import { AuthContext } from '../../shared/contextApi/AuthProvider';
const arryProduct = []
const Product = ({ product, setProducts, products }) => {
    const { productName, brandName, porductImg, desc, price, _id, rate, productType } = product;
    arryProduct.push(product)
    const [star, setStar] = useState(rate);
    const { user } = useContext(AuthContext)
    const { email } = user;
    // start rating

    const onChange = (nextValue) => {
        setStar(nextValue)
    }
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // delete method here........
                fetch(`https://scp-electronics-server-4bbwvqox5-sumonpaul55s-projects.vercel.app/product/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remainigProduct = products.filter(pd => pd._id !== _id);
                        setProducts(remainigProduct)
                    })
            }
        })
    }
    const handleAddtoCart = (id) => {
        const selededProduct = arryProduct.find((pd) => pd._id === id)
        const filterdproduct = {
            productName: selededProduct.productName, brandName: selededProduct.brandName, porductImg: selededProduct.porductImg, productType: selededProduct.productType,
            desc: selededProduct.desc, price: selededProduct.price, rate: selededProduct.rate, email: email
        }
        console.log(filterdproduct)
        fetch(`https://scp-electronics-server-4bbwvqox5-sumonpaul55s-projects.vercel.app/addtToCart`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(filterdproduct)
        })
            .then((res) => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({ title: `${selededProduct.productName} added successfully`, icon: "success" })
                }
            })
    }
    return (
        <div>
            <div className='p-3 bg-stone-50 shadow gap-5 flex-col sm:flex-row rounded-xl space-y-5 flex items-center justify-center'>
                <img src={porductImg} className="w-full sm:w-1/3" alt="" />
                <div className=''>
                    <div className='flex items-center justify-between'>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">{productName.slice(0, 10)}</h2>
                        <div className='flex gap-3 justify-end items-c'>
                            <Link to={`/updateProduct/${_id}`}>
                                <span className='p-3 bg-gray-200 flex justify-center items-center hover:bg-gray-400 cursor-pointer'><AiFillEdit />Edit</span>
                            </Link>
                            <span className='p-3 bg-gray-200 flex justify-center items-center hover:bg-gray-400 cursor-pointer' onClick={() => handleDelete(_id)}><AiFillDelete />Delete</span>
                        </div>
                    </div>
                    <ReactStars
                        onChange={onChange}
                        value={star}
                        edit={true}
                        activeColors={["#FFCE00", "#9177FF", "#8568FC",]}
                    />
                    <div className='flex text-lg justify-between font-semibold'>
                        <h3>Brands: {brandName}</h3>
                        <p className='text-secondary'>price: ${price ? price : "Free"}</p>
                    </div>
                    <p>Product type: {productType}</p>
                    <p className='text-sm mt-3'>{desc.slice(0, 70)}</p>
                    <div className='flex justify-between pt-3 gap-2'>
                        <Link to={`/productDetail/${_id}/`}><button className='btn btn-secondary px-2'>Details</button></Link>
                        <button className='btn btn-secondary px-2' onClick={() => handleAddtoCart(_id)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object,
    name: PropTypes.string,
    setProducts: PropTypes.func,
    products: PropTypes.array
}
export default Product;