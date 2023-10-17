import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFoud = () => {
    return (
        <div className='container mx-auto p-1'>
            <div className='max-w-[600px] bg-gray-300 rounded-lg shadow py-10 px-10 mt-32 mx-auto text-center'>
                <div>
                    <h2 className="text-4xl mb-10">404 Page Not Found</h2>
                    <Link to="/" className='bg-primary text-2xl mt-10 text-white py-2 px-4 rounded-md hover:bg-secondary'>Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFoud;