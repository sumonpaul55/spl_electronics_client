import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { AuthContext } from '../../shared/contextApi/AuthProvider';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { loading } = useContext(AuthContext)
    const { brand } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/products/${brand}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    console.log(products)
    return (
        <div>
            {loading ?
                <div className='animate-spin bg-black w-20 h-20 mx-auto mt-20'></div> :
                products?.map((product, idx) => (
                    <Product key={idx} product={product}></Product>
                ))
            }

        </div>
    );
};

export default Products;