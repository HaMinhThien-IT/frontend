import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import Footer from '../../components/footer/Footer'
import { productController } from '../../controller/ProductController'
import { Product } from '../../model/Product'
import { Cart } from '../../model/Cart'
import { toast } from 'react-toastify'


export default function ProductDetail() {
    const [product, setProduct] = useState<Product>()
    const [quantity,setQuantity] = useState<number>(1)
    console.log(product);
    const { id } = useParams();
    useEffect(() => {
        productController.detail(String(id)).then(res => { setProduct(res) }
        )
        
    }, [id])




    const addToCart = () => {
        let cartProduct: Cart[] = [];
        let JSONCart = localStorage.getItem("Cart")
        if (JSONCart != null) {
            cartProduct = JSON.parse(JSONCart)
        }
        let check:boolean= true
        for(let i =0;i<cartProduct.length;i++){
            if(cartProduct[i].id === product?.id){
               check = false
               cartProduct[i].quantity = cartProduct[i].quantity + quantity
            }
        }
        
        if(check === true){
            let cartTemp: Cart ;
            cartTemp={
                    id: String(product?.id),
                    image : String(product?.image),
                    name : String(product?.name),
                    price : Number(product?.price),
                    quantity : quantity
                }  
                cartProduct.push(cartTemp)  
               
        }  
        localStorage.setItem('Cart', JSON.stringify(cartProduct))
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
        <div>

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
                <button onClick={addToCart} className="themVaoGioHang" >
                    <p>
                        THÊM VÀO GIỎ HÀNG
                    </p>
                </button>
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
            <Footer />
        </div >

    )
}
