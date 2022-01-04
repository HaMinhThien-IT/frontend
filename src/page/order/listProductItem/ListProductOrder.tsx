import React from 'react'
import { formatMoney } from '../../../components/helper'
import { Cart } from '../../../model/Cart'
import { Cartx } from '../../../model/Cartx'
import { OrderWithDetail } from '../../../model/order'
import './ListProductOrder.css'
export default function ListProductOrder(props : props) {
    return (
       
            <div className="containerITem">
               <img src={props.cartx.image} alt="" />
                <h3 className="nameItemOrder">{props.cartx.name}</h3>
                <p className="quantity"> {props.cartx.quantity}</p>
                <p className="priceItemOrder">{formatMoney(props.cartx.price)} vnd</p>
                <p className='totalMoney'>{formatMoney(props.cartx.quantity *props.cartx.quantity)} vnd </p>
            </div>
        
    )
}
interface props {
    cartx : Cartx
}