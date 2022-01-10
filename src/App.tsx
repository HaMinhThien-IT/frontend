
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './page/home/Home';
import TableProduct from './page/admin/tableproducts/TableProduct';
import ProductDetail from './page/ProductDetail/ProductDetail';
import CartPage from './page/cart/CartPage';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Order from './page/order/Order';
import CheckOut from './page/checkout/CheckOut';
import Login from './page/Auth/Login/Login';
import IndexLeft from './page/home/indexleft/IndexLeft';
import { createContext, useEffect, useState } from 'react';
import { authController } from './controller/AuthController';
import { Cartx } from './model/Cartx';
import { orderController } from './controller/ OrderController';
import Context from './store/Context';
import ContextOrderQuantity from './store/ContextOrderQuantity';
import IndexRight from './page/home/indexright/indexRight';


function App() {

  return (

    <BrowserRouter>
      <Context>
        <ContextOrderQuantity>
          <IndexLeft />

      

        <ToastContainer />

        <Routes>

          <Route path='/' element={<IndexRight />}></Route>
          <Route path='/admin' element={<TableProduct />}></Route>
          <Route path='/product/:id' element={<ProductDetail />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/checkout' element={<CheckOut />}></Route>
          <Route path='/login' element={<Login />}></Route>
        
        </Routes>
        </ContextOrderQuantity>
      </Context>
    </BrowserRouter>
  );
}

export default App;
