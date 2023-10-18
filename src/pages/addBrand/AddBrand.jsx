import React from 'react';

const AddBrand = () => {
    const handleAddBrand = event => {
        event.preventDefault()
        const form = event.target;
        const bname = form.bname.value;
        const bimg = form.imgurl.value;
        const desc = form.desc.value;
        console.log({ bname, bimg, desc })

    }
    return (
        <div className='container mx-auto px-1 mt-20'>
            <div className='max-w-[700px] mx-auto'>
                <form className='space-y-10' onSubmit={handleAddBrand}>
                    <div>
                        <label htmlFor="" className='text-xl mb-2 block'>Brand name</label>
                        <input type="text" name='bname' className='w-full border p-3 rounded-md ' placeholder='Brand Name' />
                    </div>
                    <div>
                        <label htmlFor="" className='text-xl mb-2 block'>Brand Image</label>
                        <input type="text" placeholder='Brand Img Url' className='w-full border p-3 rounded-md' name='imgurl' />
                    </div>
                    <input type="text" placeholder='Description' className='w-full border p-3 rounded-md' name='desc' />
                    <input type="submit" className='btn btn-secondary w-full' />

                </form>
            </div>
        </div>
    );
};

export default AddBrand;