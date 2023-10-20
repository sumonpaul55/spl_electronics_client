import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/header/Navbar';
import Footer from '../shared/footer/Footer';
const Root = () => {
    return (
        <div>
            <div className='sticky top-0 bg-white z-[99999]'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;