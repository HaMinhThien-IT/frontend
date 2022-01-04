import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { orderController } from '../../controller/ OrderController';
import { Cart } from '../../model/Cart';
import { Cartx } from '../../model/Cartx';
import { OrderWithDetail } from '../../model/order';

import './Cart.css'
import CartItem from './cartItem/CartItem';
import CartNull from './cartNull/CartNull';
import TotalMoney from './totalMoney/TotalMoney';

export default function CartPage() {
    const [listCartItem, setListCartItem] = useState<Cartx[]>([])

    useEffect(() => {
        orderController.listCart(3).then(res =>{
            setListCartItem(res)    
        })
        
    },[])
    const minus = (id: String,quantity:number) => {
      console.log(quantity);
      if(quantity > 1){
        orderController.minus(String(id)).then(res =>{
            setListCartItem(res)      
          })  
      }
    }
    const plus = (id: String) => {
      orderController.plus(String(id)).then(res =>{
        setListCartItem(res)      
      })  
    }
    let total: number = 0
    for (let i = 0; i < listCartItem.length; i++) {
        total += listCartItem[i].price* listCartItem[i].quantity
        console.log(total);
    }
    const remove = (id: String) => {
        orderController.delete(String(id)).then(res =>{
            setListCartItem(res)  
        })
    }

    return (
        <div className='containerCart'>

            {
                listCartItem.length >=1 && (
                    <div className="container">
                    <div className="contentProduct">
                        <h1 className='titPage'>Giỏ hàng của bạn</h1>
                        <div className="itemGioHang">
                            <div className="item-product" id="mau1">
                            </div>
                            <div className="item-product" id="mau1">
                                <p>Tên sản phẩm</p>
                            </div>
                            <div className="item-product" id="mau1">
                                <p>Giá</p>
                            </div>
                            <div className="item-product ay">
                                <p >Số lượng</p>
                            </div>
                            <div className="item-product" id="mau1">
                                <p>Tổng tiền</p>
                            </div>
                            <div className="item-product ay">
                                <p>Thao tác</p>
                            </div>
                        </div>
                    </div>
    
                    <div id="thongTinSanPham">
                        {
                            listCartItem.map((item, index) => <CartItem remove={remove} cart={item} key={index} minus={minus} plus={plus} />)
                        }
                    </div>
    
                    <TotalMoney total={total} />
                </div>
                )
               
            }
            { listCartItem.length <=0 &&  <CartNull />}       
        </div >
    )
}
