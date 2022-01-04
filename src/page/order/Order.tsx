import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { formatMoney } from '../../components/helper'
import { orderController } from '../../controller/ OrderController'
import { BuyUser } from '../../model/BuyUser'
import { Cart } from '../../model/Cart'
import { Cartx } from '../../model/Cartx'
import { Order, OrderWithDetail } from '../../model/order'

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
    const buyer:BuyUser ={
       nameUser : '',numberPhone:'',address:'',email:'',user_id:3
    }
     const [user,setUser] = useState<BuyUser>(buyer)
    const onCheckOut = () =>{
        orderController.checkout(user,listCartItem[0].order_id)  

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
            <input className='inputOrder' type="text" placeholder='Name ...' onChange={e =>(setUser({...user,nameUser:e.target.value}))}/>
            <input className='inputOrder' type="text" placeholder='Number phone ...'onChange={e =>(setUser({...user,numberPhone:e.target.value}))}/>
            <input className='inputOrder' type="text" placeholder='Address'onChange={e =>(setUser({...user,address:e.target.value}))}/>
            <input className='inputOrder' type="text" placeholder='Email'onChange={e =>(setUser({...user,email:e.target.value}))}/>
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
            <Link className='btn' to='/checkout'>  <button className='btnCheckout' onClick={onCheckOut}>Check out</button></Link> 
          
    </div>
        </div>
    )
}
