import axios, { } from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
const Image_API = import.meta.env.VITE_IMAGE_API_KEY;
const imageHosting = `https://api.imgbb.com/1/upload?key=${Image_API}`

const AddUpCommingCategory = () => {
    const handleUpcommingProductsAdd = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const details = form.categoryDetails.value;
        // accessing image
        // const categoryImage = form.cateImg.files[0]
        const imageFile = form.cateImg.files[0];
        const formData = new FormData();
        formData.append("key", Image_API);
        formData.append("image", imageFile);

        const res = await axios.post(imageHosting, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        if (res.data.success) {
            const categoryImgUrl = res.data.data.url;
            const upcommingCategory = { categoryImgUrl, title, details }
            const postResponse = await axios.post("http://localhost:5000/upcommingCategory", upcommingCategory)
            if (postResponse.data.insertedId) {
                Swal.fire({
                    title: "Category added as a Upcomming Product"
                })
            }
            form.reset();
        }
    }
    return (
        <main>
            <div className="conatiner mx-auto">
                <div className='max-w-[600px] mx-auto border p-10 m-20'>
                    <form onSubmit={handleUpcommingProductsAdd} className='space-y-5 font-semibold'>
                        <div>
                            <label htmlFor="">Category name</label>
                            <input type="text" name="title" placeholder='Category Title' className='w-full px-3 py-1 outline-0 border mt-3' />
                        </div>
                        <div>
                            <label htmlFor="">Image</label>
                            <input type="file" name="cateImg" className='w-full px-3 py-1 outline-0 border mt-3' id='cateImg' />
                        </div>
                        <div>
                            <label htmlFor="">Category Details</label>
                            <textarea name="categoryDetails" className='w-full px-3 py-1 outline-0 border mt-3'></textarea>
                        </div>
                        <input type="submit" className='bg-slate-500 text-white px-2 py-1 cursor-pointer' />
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddUpCommingCategory;