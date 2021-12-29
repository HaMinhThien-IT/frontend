import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexLeft() {
    return (
        <div className="khoiTrai">
            <div className="logo">
                <a >  <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/store_1587022637_735.jpg"  /></a>
            </div>
            {/* icon menu */}
            <div className="icon-menu">
                <Link to="/admin"><i className="far fa-user-circle" /></Link>
               <a href=""><i className=" icon fas fa-search" /></a>
                <a ><i className="far fa-heart" /></a>
                <Link to="/cart"><i className="fas fa-shopping-cart" /></Link>
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
                        <span>0981832226</span>
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
