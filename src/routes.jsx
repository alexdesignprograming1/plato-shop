import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Login/Login";
import { Product } from "./pages/Product/Product";
import { ProductList } from "./pages/ProductList/ProductList";
import { Register } from "./pages/Register/Register";

const MainRouter = () => {
  return (
    <Routes> 
      <Route path="/" element={<Home/>} /> 
      <Route path="/Cart" element={<Cart/>} /> 
      <Route path="/Login" element={<Login/>} /> 
      <Route path="/Register" element={<Register/>} /> 
      <Route path="/Product" element={<Product/>} /> 
      <Route path="/ProductList" element={<ProductList/>} /> 
    </Routes>
  );
};

export {MainRouter};