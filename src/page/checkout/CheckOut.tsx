import React, { useEffect, useState } from 'react'
import { orderController } from '../../controller/ OrderController'
import { Order, OrderWithDetail } from '../../model/order'
import './Checkout.css'
import CheckOutItem from './checkoutItem/CheckOutItem'
export default function CheckOut() {
    const [listOrder,setListOrder] = useState<OrderWithDetail[]>([])
    useEffect(()=>{
        orderController.getListOrderProduct(3).then(res =>{
            setListOrder(res);     
        })
    },[])
    
    
    return (
        <div className='containerOrder1'>
            <h1 className="history">Order history</h1>
            {
                listOrder.map((item,index)=><CheckOutItem orderWithDetail={item} key={index}/>)
            }
           
            
        </div>
    )
}
