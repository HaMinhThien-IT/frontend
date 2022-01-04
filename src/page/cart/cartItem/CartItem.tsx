import React from 'react'
import { formatMoney } from '../../../components/helper'
import { Cart } from '../../../model/Cart'
import { Cartx } from '../../../model/Cartx'
import { OrderWithDetail } from '../../../model/order'
import './CartItem.css'
export default function CartItem(props: props) {
    return (
        <div>
            <div className="itemGioHang">
                <div className="item-product">
                    <div className="hinhAnh">
                        <img src={props.cart.image} />
                    </div>
                </div>
                <div className="item-product">
                    <p>{props.cart.name}</p>
                </div>
                <div className="item-product">
                    <p>{props.cart.price}<span> NVĐ</span></p>
                </div>
                <div className="item-product">

                    <button onClick={()=>props.plus(props.cart.order_product_id)}> <i className="fas fa-plus"></i></button>
                    <input type="text" value={props.cart.quantity} 
                    />
                    <button onClick={()=>props.minus(props.cart.order_product_id,props.cart.quantity)}  > <i className="fas fa-minus"></i></button>

                    
                </div>
                <div className="item-product">
                    <p>{formatMoney(props.cart.quantity * props.cart.price)}<span> NVĐ</span></p>
                </div>
                <div className="item-product">
                    <i className=" iconx fas fa-trash-alt" onClick={()=>props.remove(props.cart.order_product_id)} />
                </div>
            </div>
        </div>
    )
}

interface props {
    cart: Cartx,
    minus : (id:String,quantity:number) => void ,
    plus : (id:String) => void  ,
    remove : (id:String)=>void

}
