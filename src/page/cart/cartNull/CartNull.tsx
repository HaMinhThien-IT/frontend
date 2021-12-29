import React from 'react'
import './CartNull.css'
export default function CartNull() {
    return (
        <div className='containerNull'>
            <img src="https://beemall.io/search.png" alt="" />
            <h4 className='isEmpty'>Cart is empty!</h4>
            <p>Please add products to cart before make the payment!</p>
            <button>Shop now!</button>
        </div>
    )
}
