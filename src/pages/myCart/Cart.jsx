import React from 'react';
import PropTypes from "prop-types"
import Swal from 'sweetalert2';
const Cart = ({ product, allCartData, setAllCartData }) => {
    const { porductImg, productName, productType, brandName, price, _id } = product;
    console.log(product)
    const handleDelete = (id) => {
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
                fetch(`http://localhost:5000/deleteCart/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Product has been deleted.',
                                'success'
                            )
                        }
                        const remainigProduct = allCartData.filter(pd => pd._id !== id);
                        setAllCartData(remainigProduct)
                    })
            }
        })
    }
    return (
        <div className='flex gap-4 items-center shadow-lg p-10'>
            <img src={porductImg} alt={productName} className='md:w-1/3' />
            <div className='flex-1'>
                <h2 className="text-xl md:text-3xl font-bold">{productName}</h2>
                <p className='font-bold'>$ {price}</p>
                <p>Type: {productType}</p>
                <p>Brand: {brandName}</p>
            </div>
            <button className='btn btn-secondary' onClick={() => handleDelete(_id)}>Delete</button>
        </div>

    );
};
Cart.propTypes = {
    product: PropTypes.object,
    allCartData: PropTypes.array,
    setAllCartData: PropTypes.func
}
export default Cart;