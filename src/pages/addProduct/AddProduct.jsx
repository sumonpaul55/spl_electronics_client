import React from 'react';

const AddProduct = () => {

    const handleAddproduct = event => {
        event.preventDefault()



        // form.reset();
    }
    return (
        <div className='container mx-auto px-1 mt-20'>
            <div className='max-w-[700px] mx-auto'>
                <form className='space-y-10' onSubmit={handleAddproduct}>
                    <div className='flex gap-2'>
                        <div className='flex-1'>
                            <label htmlFor="" className='text-xl mb-2 block'>Proudct name</label>
                            <input type="text" name='product-name' className='w-full border p-3 rounded-md ' placeholder='product-name' />
                        </div>
                        <div>
                            <label htmlFor="" className='text-xl mb-2 block'>Brands Name</label>
                            <select name="brand" id="" className='p-3 border'>
                                <option value="apple">apple</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xl mb-2 block'>Product Image</label>
                            <input type="text" placeholder='Product Img Url' className='w-full border p-3 rounded-md' name='image-url' />
                        </div>
                        <div className=''>
                            <label htmlFor="" className='text-xl mb-2 block'>Product Type</label>
                            <input type="text" placeholder='Product Type' className='w-full border p-3 rounded-md' name='productType' />
                        </div>
                    </div>
                    <input type="text" placeholder='Description' className='w-full border p-3 rounded-md' name='desc' />
                    <input type="submit" className='btn btn-secondary w-full' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;