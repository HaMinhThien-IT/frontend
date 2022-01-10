import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { userContext } from '../../../store/Context'
import { quanTityOrderContext } from '../../../store/ContextOrderQuantity'

export default function IndexLeft() {
    const {name} = useContext(userContext)
    const {quantity} = useContext(quanTityOrderContext)
    return (
        <div className="khoiTraiIndexleft">
            <div className="logo">
                <Link to='/'>  <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/store_1587022637_735.jpg"  /></Link>
            </div>
            {/* icon menu */}
            <div className="icon-menu">
                <Link to="/admin"><i className="far fa-user-circle" /></Link>
               <a href=""><i className=" icon fas fa-search" /></a>
                <a ><i className="far fa-heart" /></a>
                <Link to="/cart"><i className="fas fa-shopping-cart" /> {quantity > 0 ? <span className='quantityCart'>{quantity}</span> : ''}</Link>
            </div>
            {/*  danh sách menu  */}
            <div className="dsMenu">
                <nav className="navBar">
                    <ul className="menuCap1">
                        {/* li.itemMenuCap1*6>a */}
                        <li className="itemMenuCap1"><a >NEW ARRIVALS</a></li>
                        <li className="itemMenuCap1"><a >ĐỒ NAM</a></li>
                        <li className="itemMenuCap1"><a >ĐỒ NỮ</a></li>
                        <li className="itemMenuCap1"><a >ĐỒ ĐÔI</a></li>
                        <li className="itemMenuCap1"><a >ÁO KHOÁC</a></li>
                        <li className="itemMenuCap1"><a >PHỤ KIỆN</a></li>
                        <li className="itemMenuCap1"><a >TOTO FANZONE</a></li>
                    </ul>
                </nav>
            </div>
            {/*  call */}
            <div className="footer-nav">
                <div className="hotLineBox">
                    <a href="tel:0981832226">
                        <i className="fas fa-phone-alt" />
                        <span>{name}</span>
                    </a>
                </div>
            </div>
            {/*  */}
            <div className="narbar-footer">
                <ul className="menuFooter" />
                <li className="itemFooter"><a ><i className="fab fa-facebook-square" /></a></li>
                <li className="itemFooter"><a ><i className="fab fa-youtube" /></a></li>
                <li className="itemFooter"><a ><i className="fab fa-instagram-square" /></a></li>
                <li className="itemFooter"><a ><i className="fab fa-twitch" /></a></li>
            </div>
        </div>

    )
}
interface props {
    name : string
}