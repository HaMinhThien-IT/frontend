import React, { useContext, useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import './ProductDetail.css'
import Footer from '../../components/footer/Footer'
import { productController } from '../../controller/ProductController'
import { Product } from '../../model/Product'

import { toast } from 'react-toastify'
import { orderController } from '../../controller/ OrderController'
import { authController } from '../../controller/AuthController'
import { userContext } from '../../store/Context'


export default function ProductDetail() {
    const [product, setProduct] = useState<Product>()
    const [quantity,setQuantity] = useState<number>(1)
    console.log(product);
    const { id } = useParams();
    useEffect(() => {
        productController.detail(String(id)).then(res => { setProduct(res) }
        )
        
    }, [id])
    const {user_id,onSetUser_id} = useContext(userContext)
    useEffect(()=>{
        authController.getMe().then(res=>{         
            onSetUser_id(res.user_id);           
        })
    },[])
    const addToCart = () => {
        // 
        orderController.cart(String(id),quantity,Number(product?.price),user_id)
        toast.success('Thêm đơn hàng thành công', {
            position: 'top-center',
            autoClose: 3000
          })
    }
    const plus = () =>{
        setQuantity(quantity-1)
        if(quantity <= 1){
            setQuantity(1)
        }
    }

    return (
        <div className='chiTietSanPham'>

            <div className="hinhAnh-sanPham">
                <img src={product?.image} />
            </div>
            <div className="thongTin-sanPham">
                <p className="ten-sanPham">
                    {product?.name}
                </p>
                <p className="lienHe">
                    {String(product?.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<span> NVĐ</span>
                </p>

                <p className="mauSacP"> Số lượng</p>
                <p className="mauSac">
                    <button onClick={()=>setQuantity(quantity+1)}> <i className="fas fa-plus"></i></button>
                    <input type="text" value={quantity} onChange={e =>setQuantity(Number(e.target.value))
                    }/>
                    <button onClick={plus}> <i className="fas fa-minus"></i></button>
                </p>
                <br />
                <Link to="/cart">   <button onClick={addToCart} className="themVaoGioHang" >
                    <p>
                        THÊM VÀO GIỎ HÀNG
                    </p>
                </button></Link>
             
                <button className="muangay">
                    Mua ngay
                </button>
                <br />
                <button className="dangCoTaiCuaHang">
                    <i className="fas fa-store" />Đang có tại cửa hàng
                </button>
                <div className="chinhSachBaoHanh">
                    <p><i className="fas fa-chevron-right" /><i className="fas fa-chevron-right" /> BẢO HÀNH SẢN PHẨM TRONG 90 NGÀY</p>
                    <p><i className="fas fa-chevron-right" /><i className="fas fa-chevron-right" /> BẢO HÀNH TRONG VÒNG 30 NGÀY</p>
                    <p><i className="fas fa-chevron-right" /><i className="fas fa-chevron-right" /> HOTLINE BÁN HÀNG 1900 633 501</p>
                </div>
            </div>
        </div >

    )
}
