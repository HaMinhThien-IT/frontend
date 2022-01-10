import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { orderController } from '../../../controller/ OrderController'
import { Product } from '../../../model/Product'

export default function ProductHome(props: props) {
    let path = '/product'
    const addToCart = () => {
        // 
        orderController.cart(String(props.product.id), 1, Number(props.product.price), 3)

        toast.success('Thêm đơn hàng thành công', {
            position: 'top-center',
            autoClose: 3000
        })
    }
    return (
        <div>
            <div className="sanPham">
                <div className="contai">
                    <div className="">
                        <Link to={path + `/${props.product.id}`}> <img src={props.product.image} /></Link>

                    </div>
                    <p className="gia">
                        {String(props.product.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<span> NVĐ</span>
                    </p>
                    <button className='btnAddToCart' onClick={addToCart}>Thêm giỏ hàng</button>
                </div>
            </div >
        </div>

    )
}
interface props {
    product: Product,
}
