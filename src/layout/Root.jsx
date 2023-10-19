import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/header/Navbar';

const Root = () => {
    return (
        <>
            <div className='sticky top-0 bg-white z-50'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default Root;