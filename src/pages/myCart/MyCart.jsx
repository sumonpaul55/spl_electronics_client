import React, { useContext, useEffect, useState } from 'react';
import { } from 'react-router-dom';
import Cart from './Cart';
import { AuthContext } from '../../shared/contextApi/AuthProvider';

const MyCart = () => {
    const { user, loading } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    const [allCartData, setAllCartData] = useState(cart)
    let email;
    if (!loading) {
        email = user.email;
    }
    useEffect(() => {
        fetch(`http://localhost:5000/myCart/${email}`)
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
        console.log(email)
    }, [email])
    let price = 0;
    allCartData.forEach((items) => {
        const productprice = parseInt(items.price);
        price += productprice;
    })

    return (
        <div className='container mx-auto p-1'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                {cart.length > 0 ?
                    cart.map((product, idx) => (
                        <Cart key={idx} product={product} allCartData={allCartData} setAllCartData={setAllCartData}></Cart>
                    ))
                    :
                    <div className='h-[50vh] flex items-center justify-center'>
                        <h2 className='text-center font-bold text-2xl md:text-3xl'>No Product Added Yet to your cart</h2>
                    </div>
                }
            </div>
            {
                allCartData.length > 0 &&
                <div className='shadow p-5 mt-20'>
                    <h2 className="text-lg md:text-xl">Total Items : {allCartData.length}</h2>
                    <div className='flex justify-between items-center font-bold space-y-10'>
                        <h2 className="text-lg md:text-xl">Total Price:</h2>
                        <h2>$ {price}</h2>
                    </div>
                    <hr />
                    <button className='btn btn-secondary mt-10 w-full'>Procced</button>
                </div>
            }
        </div>
    );
};

export default MyCart;