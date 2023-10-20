import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const loadedData = useLoaderData();
    const { brandName, desc, porductImg, price, productName, productType, rate, _id } = loadedData
    const navigate = useNavigate();
    const handleUpdateProduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const productName = form.productName.value;
        const brandName = form.brand.value;
        const porductImg = form.imageImg.value;
        const productType = form.productType.value;
        const desc = form.desc.value;
        const rate = form.rating.value;
        const price = form.price.value;
        const product = { productName, porductImg, brandName, productType, desc, rate, price }
        fetch(`http://localhost:5000/updateProduct/${_id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        "Product Updated Successfully"
                    )
                    navigate(-1)
                }
            })
    }
    return (
        <div className='container mx-auto px-1 mt-20'>
            <div className='max-w-[700px] mx-auto'>
                <form className='space-y-10' onSubmit={handleUpdateProduct}>
                    <div className='flex gap-2'>
                        <div className='flex-1'>
                            <label htmlFor="" className='text-xl mb-2 block'>Proudct name</label>
                            <input type="text" name='productName' className='w-full border p-3 rounded-md' defaultValue={productName} placeholder='product-name' required />
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl mb-2 block'>Brands Name</label>
                            <select name="brand" defaultValue={brandName} id="" className='p-3 border' required>
                                <option value="apple">Apple</option>
                                <option value="xiaomi">Xiaomi</option>
                                <option value="oppo">Oppo</option>
                                <option value="samsung">Samsung</option>
                                <option value="sony">Sony</option>
                                <option value="intel">Intel</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xl mb-2 block'>Product Image</label>
                            <input type="text" placeholder='Product Img Url' defaultValue={porductImg} className='w-full border p-3 rounded-md' name='imageImg' required />
                        </div>
                        <div className=''>
                            <label htmlFor="" className='text-xl mb-2 block'>Product Type</label>
                            <input type="text" placeholder='Product Type' className='w-full border p-3 rounded-md' defaultValue={productType} name='productType' required />
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xl mb-2 block'>Short Description</label>
                            <input type="text" placeholder='Description' defaultValue={desc} className='w-full border p-3 rounded-md' name='desc' required />
                        </div>
                        <div className=''>
                            <label htmlFor="" className='text-xl mb-2 block'>Product Type</label>
                            <input type="number" placeholder='Price $' defaultValue={price} className='w-full border p-3 rounded-md' name='price' required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Rate Out of five</label>
                        <select defaultValue={rate} name="rating" className='block p-3 border w-full cursor-pointer' id="" required>
                            <option className='' value="">select</option>
                            <option className='' value="1">1</option>
                            <option className='' value="2">2</option>
                            <option className='' value="3">3</option>
                            <option className='' value="4">4</option>
                            <option className='' value="5">5</option>
                        </select>
                    </div>
                    <input type="submit" value="Update Product" className='btn btn-secondary w-full' />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;