import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import PageNotFoud from '../PageNotFoud';
import Home from '../../pages/home/Home';
import Root from '../../layout/Root';
import AddProduct from '../../pages/addProduct/AddProduct';
import MyCart from '../../pages/myCart/MyCart';
import Login from '../../pages/login/Login';
import SignUp from '../../pages/signup/SignUp';
import AddBrand from '../../pages/addBrand/AddBrand';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFoud></PageNotFoud>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add-product",
                element: <AddProduct></AddProduct>
            }, {
                path: "/my-cart",
                element: <MyCart></MyCart>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>

            },
            {
                path: "/addBrand",
                element: <AddBrand></AddBrand>
            }
        ]
    },
]);


export default router;