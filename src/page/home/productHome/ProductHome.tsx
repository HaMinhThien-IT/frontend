import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../../model/Product'

export default function ProductHome(props : props) {
    let path = '/product'
    return (
        <div>
            <div className="sanPham">
                <div className="contai">
          <div className="">
              <Link to={path + `/${props.product.id}`}> <img src={props.product.image}  /></Link>
               
            </div>
            <p className="gia">
               {String(props.product.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<span> NVĐ</span>
            </p>
        </div>
        </div >
        </div>

    )
}
interface props {
    product : Product,  
}
