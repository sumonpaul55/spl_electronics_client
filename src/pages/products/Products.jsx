import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Product from './Product';
import { AuthContext } from '../../shared/contextApi/AuthProvider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slideritem from './Slideritem';
// import Slideritem from './Slideritem';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { loading } = useContext(AuthContext)
    const { brand } = useParams();
    const navigate = useNavigate();
    const goback = () => {
        navigate(-1)
    }
    useEffect(() => {
        fetch(`http://localhost:5000/products/${brand}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 0 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <section className='py-20'>
                <div className="container mx-auto px-1">
                    <Carousel
                        // autoPlay={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}

                        autoPlaySpeed={1000}
                        keyBoardControl={true}>
                        {
                            products.map((product, idx) => (
                                <Slideritem key={idx} product={product}></Slideritem>
                            ))
                        }
                    </Carousel>
                </div>
            </section>
            <section className='py-20 bg-slate-100'>
                <div className="container mx-auto px-1">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-black text-center mb-20 font-bold capitalize">All Products of {brand}</h1>
                    <div className='grid gap-5 md:gap-8 grid-cols-1 lg:grid-cols-2'>
                        {loading ?
                            <div className='animate-spin bg-black w-20 h-20 mx-auto mt-20'></div> :
                            products?.map((product, idx) => (
                                <Product key={idx} product={product} products={products} setProducts={setProducts}></Product>
                            ))
                        }
                    </div>
                    {
                        !products.length > 0 && <div className='max-w-[500px] mx-auto border p-10 shadow rounded-lg text-center'>
                            <h2 className="text-xl md:text-4xl mb-10 capitalize font-bold">no product available with {brand}</h2>
                            <Link className='btn btn-secondary' onClick={goback}>Go Back</Link>
                        </div>
                    }
                </div>
            </section>
        </>

    );
};

export default Products;