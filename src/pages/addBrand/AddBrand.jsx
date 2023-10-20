import React from 'react';
import Swal from 'sweetalert2';

const AddBrand = () => {
    const handleAddBrand = event => {
        event.preventDefault()
        const form = event.target;
        const brandName = form.bname.value;
        const brandImg = form.imgurl.value;
        const desc = form.desc.value;
        const brands = { brandName, brandImg, desc }
        fetch("https://scp-electronics-server-4bbwvqox5-sumonpaul55s-projects.vercel.app/addBrand", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(brands)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({ title: "Brand Added successfully", icon: "success" })
                }
            })
        form.reset();
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