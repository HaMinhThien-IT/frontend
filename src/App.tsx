
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
import { useEffect, useState } from 'react';
import { authController } from './controller/AuthController';



function App() {
  const [name,setName] = useState<string>('')
  console.log(name);
  
  useEffect(()=>{
    authController.getMe().then(res => {
      setName(res.nameUser);      
  })
  },[])
  return (

    <BrowserRouter>
     <IndexLeft name={name}/>
      <ToastContainer/>
     
      <Routes>
     
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin' element={<TableProduct />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/login' element={<Login />}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
