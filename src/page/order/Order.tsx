import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { formatMoney } from '../../components/helper'
import { orderController } from '../../controller/ OrderController'
import { Cart } from '../../model/Cart'
import { Cartx } from '../../model/Cartx'
import { Order } from '../../model/order'

import ListProductOrder from './listProductItem/ListProductOrder'

import './Order.css'

export default function Checkout() {
    
    const [listCartItem, setListCartItem] = useState<Cartx[]>([])
    useEffect(() => {
        orderController.listCart(3).then(res =>{
            setListCartItem(res)    
        })
        
    },[])
    let total: number = 0
    for (let i = 0; i < listCartItem.length; i++) {
        total += listCartItem[i].price * listCartItem[i].quantity       
    }
    // const order:Cart ={
    //     product:{name:'',price:0,image:'',quantity:0},
    //     name: '',address:'',email:'',createAt:Date.now(),numberPhone:0
    // }
    //  const [newOrder,setNewOrder] = useState<Order>(order)
   
    
    const onCheckOut = () =>{
        // let ItemOrder : Order;
        // for(let i =0;i<listCartItem.length;i++){
        //     ItemOrder = {
        //         product : listCartItem[i],
        //         name : newOrder.name,
        //         email : newOrder.email,
        //         numberPhone : newOrder.numberPhone,
        //         address: newOrder.address,
        //         createAt : Date.now()
        //    }
        //     orderController.checkout(ItemOrder)
        //     console.log(ItemOrder);
            
        // }
        toast.success('Mua hàng thành công', {
            position: 'bottom-left',           
            autoClose: 3000
          })
       
    }
    
    
    return (
        <div className='conTainerOrderx'>
            
            <div className='containerOrder'>
            <div className="titleDeliveryAddress">
                Delivery Address
            </div>
            <div className="containerInput">
            {/* <input className='inputOrder' type="text" placeholder='Name ...' onChange={e =>(setNewOrder({...newOrder,name:e.target.value}))}/>
            <input className='inputOrder' type="text" placeholder='Number phone ...'onChange={e =>(setNewOrder({...newOrder,numberPhone:Number(e.target.value)}))}/>
            <input className='inputOrder' type="text" placeholder='Address'onChange={e =>(setNewOrder({...newOrder,address:e.target.value}))}/>
            <input className='inputOrder' type="text" placeholder='Email'onChange={e =>(setNewOrder({...newOrder,email:e.target.value}))}/> */}
            </div>
        </div>
            <div className='containerListProductOrder'>
            <div className="titleDeliveryAddress">
                Your order
            </div>
            <div className="containerITem">
            <p className='totalMoney'> Hình ảnh</p>
                <h3 className="nameItemOrder">Tên sản phẩm</h3>
                <p className="quantity"> Số lượng</p>
                <p className="priceItemOrder">Giá</p>
                <p className='totalMoney'>Tổng tiền  </p>

            </div>
            {listCartItem.map((item,index)=><ListProductOrder cartx={item} key={index}/>)}
            </div>
          
            <div className='containerOrderBottom'>
            <p className='totalMoneyBottomTitle'>Tổng tiền</p>
            <p className='totalMoneyBottom'>{formatMoney(total)} vnd</p>
           <Link className='btn' to='/checkout'> <button className='btnCheckout' onClick={onCheckOut}>Check out</button></Link>
    </div>
        </div>
    )
}
