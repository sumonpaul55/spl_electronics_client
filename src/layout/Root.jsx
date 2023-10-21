import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/header/Navbar';
import Footer from '../shared/footer/Footer';
import ScrollToTop from '../shared/ScrollToTop';
const Root = () => {
    return (
        <div>
            <div className='sticky top-0 bg-white z-[99999]'>
                <Navbar></Navbar>
            </div>

            <ScrollToTop />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;