import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const handleAddproduct = event => {
        event.preventDefault()
        const form = event.target;
        const productName = form.productName.value;
        const brandName = form.brand.value;
        const porductImg = form.imageImg.value;
        const productType = form.productType.value;
        const desc = form.desc.value;
        const rate = form.rating.value;
        const product = { productName, porductImg, brandName, productType, desc, rate }
        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({ title: 'Product Added Successfully', icon: "success" })
                }
            })
        form.reset();
    }
    return (
        <div className='container mx-auto px-1 mt-20'>
            <div className='max-w-[700px] mx-auto'>
                <form className='space-y-10' onSubmit={handleAddproduct}>
                    <div className='flex gap-2'>
                        <div className='flex-1'>
                            <label htmlFor="" className='text-xl mb-2 block'>Proudct name</label>
                            <input type="text" name='productName' className='w-full border p-3 rounded-md ' placeholder='product-name' required />
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl mb-2 block'>Brands Name</label>
                            <select name="brand" id="" className='p-3 border' required>
                                <option value="apple">Apple</option>
                                <option value="xioami">Xioami</option>
                                <option value="oppo">Oppo</option>
                                <option value="samsung">Samsung</option>
                                <option value="sony">Sony</option>
                                <option value="intel">Intel</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xl mb-2 block'>Product Image</label>
                            <input type="text" placeholder='Product Img Url' className='w-full border p-3 rounded-md' name='imageImg' required />
                        </div>
                        <div className=''>
                            <label htmlFor="" className='text-xl mb-2 block'>Product Type</label>
                            <input type="text" placeholder='Product Type' className='w-full border p-3 rounded-md' name='productType' required />
                        </div>
                    </div>
                    <input type="text" placeholder='Description' className='w-full border p-3 rounded-md' name='desc' required />
                    <div>
                        <label htmlFor="">Rate Out of five</label>
                        <select name="rating" className='block p-3 border w-full cursor-pointer' id="" required>
                            <option className='' value="1">1</option>
                            <option className='' value="2">2</option>
                            <option className='' value="3">3</option>
                            <option className='' value="4">4</option>
                            <option className='' value="5">5</option>
                        </select>
                    </div>
                    <input type="submit" value="Add Product" className='btn btn-secondary w-full' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;