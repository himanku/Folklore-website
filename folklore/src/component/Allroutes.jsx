import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Home as AdminHome } from "../pages/Admin/Home";
import AllProducts from "../pages/Admin/AllProducts";
import Users from "../pages/Admin/Users";
import Orders from "../pages/Admin/Orders";
import Dresses from "../pages/Admin/Dresses";
import Furniture from "../pages/Admin/Furniture";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/dashboard" element={<AdminHome />} />
      <Route path="/admin/products" element={<AllProducts />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/products/dresses" element={<Dresses />} />
      <Route path="/admin/products/furniture" element={<Furniture />} />
    </Routes>
  );
};

export default Allroutes;
