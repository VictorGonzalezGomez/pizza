import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../views/Home";
import PizzaDetail from "../views/PizzaDetail";
import Cart from "../views/Cart";


const PageContainer = () => {


  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pizza/:id" element={<PizzaDetail/>}/>
        <Route path="/carrito" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>

  )
};

export default PageContainer;