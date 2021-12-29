import React from 'react'
import { formatMoney } from '../../../components/helper'
import { Cart } from '../../../model/Cart'
import './ListProductOrder.css'
export default function ListProductOrder(props : props) {
    return (
       
            <div className="containerITem">
               <img src={props.cart.image} alt="" />
                <h3 className="nameItemOrder">{props.cart.name}</h3>
                <p className="quantity"> {props.cart.quantity}</p>
                <p className="priceItemOrder">{formatMoney(props.cart.price)} vnd</p>
                <p className='totalMoney'>{formatMoney(props.cart.price * props.cart.quantity)} vnd </p>
            </div>
        
    )
}
interface props {
    cart : Cart
}
