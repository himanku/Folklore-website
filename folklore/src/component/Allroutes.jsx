import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Home as AdminHome } from "../pages/Admin/Home";
import AllProducts from "../pages/Admin/AllProducts";
import Users from "../pages/Admin/Users";
import Orders from "../pages/Admin/Orders";
import Dresses from "../pages/Admin/Dresses";
import Furniture from "../pages/Admin/Furniture";
import Dress from "../pages/Dress";
import SingleDress from "../pages/SingleDress";
import EditPage from "../pages/Admin/EditPage";
import SingleUser from "../pages/Admin/SingleUser";

import CheckoutPage from "../pages/CartPage/CheckoutPage";
import Payment from "../pages/CartPage/Payment";
import CartData from "../pages/CartPage/CartPage";


import PrivateRoute from "../HOC/PrivateRoute";
import PrivateRouteAdmin from "../HOC/PrivateRouteAdmin";


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/dashboard" element={<PrivateRouteAdmin> <AdminHome /></PrivateRouteAdmin>} />
      <Route path="/admin/products" element={<AllProducts />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/products/dresses" element={<Dresses />} />
      <Route path="/admin/products/furniture" element={<Furniture />} />
      <Route path="/dress" element={<Dress />} />
      <Route path="/singledress/:id" element={<SingleDress />} />
      <Route path="/admin/products/edit/:id" element={<EditPage />} />
      <Route path="/admin/users/block/:id" element={<SingleUser />} />
      <Route path="/checkoutpage" element={<CheckoutPage />} />
      <Route path="/paymentpage" element={<Payment />} />
     <Route path="/cartpage" element={<PrivateRoute><CartData /></PrivateRoute> } />
    </Routes>
  );
};

export default Allroutes;
