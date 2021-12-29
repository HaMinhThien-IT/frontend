import React from 'react'
import { Link } from 'react-router-dom'
import './TotalMoney.css'
export default function TotalMoney(props: props) {
    return (
        <div className="total">
            <p className='titleTotalMoney'> Tổng tiền</p>
            <p className='totalMoney'> {String(props.total).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND</p>
            <Link to='/order'><button>Thanh toán</button></Link>
        </div>

    )
}
interface props {
    total: number
}
