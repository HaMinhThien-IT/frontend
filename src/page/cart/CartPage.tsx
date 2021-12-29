import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Cart } from '../../model/Cart';

import './Cart.css'
import CartItem from './cartItem/CartItem';
import CartNull from './cartNull/CartNull';
import TotalMoney from './totalMoney/TotalMoney';

export default function CartPage() {
    let listCart: Cart[] = []
    let localTam = localStorage.getItem('Cart')
    if (localTam !== null) {
        listCart = JSON.parse(localTam)
    }
    const [checkNull, setCheckNull] = useState<boolean>(true)


    const [listCartItem, setListCartItem] = useState<Cart[]>(listCart)

    // useEffect(() => {
    //     if (listCartItem !== null ) {
    //         setCheckNull(true)
    //     }else if(listCartItem === null){
    //         setCheckNull(false)
    //     }
    //     console.log(checkNull);
        
    // },[listCartItem])
    const minus = (id: String, quantity: number) => {
        for (let i = 0; i < listCartItem.length; i++) {
            if (listCartItem[i].id === id) {
                listCartItem[i].quantity = quantity - 1
                if (quantity <= 1) {
                    listCartItem[i].quantity = quantity = 1
                }
                setListCartItem(listCartItem.slice())
                localStorage.setItem('Cart', JSON.stringify(listCartItem))
            }
        }
    }
    const plus = (id: String, quantity: number) => {
        for (let i = 0; i < listCartItem.length; i++) {
            if (listCartItem[i].id === id) {
                listCartItem[i].quantity = quantity + 1
                setListCartItem(listCartItem.slice())
                localStorage.setItem('Cart', JSON.stringify(listCartItem))
            }
        }
    }
    let total: number = 0
    for (let i = 0; i < listCartItem.length; i++) {
        total += listCartItem[i].price * listCartItem[i].quantity
        console.log(total);
    }
    const remove = (id: String) => {

        const itemRm = listCartItem.filter(item => item.id !== id)
        setListCartItem(itemRm)
        localStorage.setItem('Cart', JSON.stringify(itemRm))
        toast.success('Xóa đơn hàng thành công', {
            position: 'top-center',
            autoClose: 3000
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
