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
import Products from '../../pages/products/Products';
import UpdateProduct from '../../pages/updateProduct/UpdateProduct';
import ProductDetail from '../../pages/productDetail/ProductDetail';
import AddUpCommingCategory from '../../pages/upComming/AddUpCommingCategory';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFoud></PageNotFoud>,
        children: [
            {
                path: "/",
                loader: () => fetch("https://scp-electronics-server-4bbwvqox5-sumonpaul55s-projects.vercel.app/brnads"),
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
            },
            {
                path: "/products/:brand",
                element: <Products></Products>

            },
            {
                path: "/add-upcommingCategory",
                element: <AddUpCommingCategory></AddUpCommingCategory>
            },
            {
                path: "/updateProduct/:id",
                loader: ({ params }) => fetch(`https://scp-electronics-server-4bbwvqox5-sumonpaul55s-projects.vercel.app/updateProduct/${params.id}`),
                element: <UpdateProduct></UpdateProduct>
            },
            {
                path: "/productDetail/:id",
                loader: ({ params }) => fetch(`https://scp-electronics-server-4bbwvqox5-sumonpaul55s-projects.vercel.app/productDetail/${params.id}`),
                element: <ProductDetail></ProductDetail>
            },
        ]
    },
]);


export default router;