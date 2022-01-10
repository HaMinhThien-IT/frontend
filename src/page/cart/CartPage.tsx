import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { orderController } from '../../controller/ OrderController';
import { authController } from '../../controller/AuthController';
import { Cart } from '../../model/Cart';
import { Cartx } from '../../model/Cartx';
import { OrderWithDetail } from '../../model/order';
import { userContext } from '../../store/Context';
import { quanTityOrderContext } from '../../store/ContextOrderQuantity';

import './Cart.css'
import CartItem from './cartItem/CartItem';
import CartNull from './cartNull/CartNull';
import TotalMoney from './totalMoney/TotalMoney';

export default function CartPage() {
    const [listCartItem, setListCartItem] = useState<Cartx[]>([])
    const { user_id, onSetUser_id, onSetUserName } = useContext(userContext)
    const {onSetQuantityOrder} = useContext(quanTityOrderContext)

    useEffect(() => {
        authController.getMe().then(res => {
            onSetUser_id(res.user_id);
            onSetUserName(res.nameUser)
        }).then(res => {
            orderController.listCart(user_id).then(res => {
                setListCartItem(res)
                onSetQuantityOrder(res.length)
            })
        })

    }, [user_id])
    const minus = (id: String, quantity: number) => {
        console.log(quantity);
        if (quantity > 1) {
            orderController.minus(String(id),user_id).then(res => {
                setListCartItem(res)
            })
        }
    }
    const plus = (id: String) => {
        orderController.plus(String(id),user_id).then(res => {
            setListCartItem(res)
        })
    }
    let total: number = 0
    for (let i = 0; i < listCartItem.length; i++) {
        total += listCartItem[i].price * listCartItem[i].quantity
        console.log(total);
    }
    const remove = (id: String) => {
        orderController.delete(String(id),user_id).then(res => {
            setListCartItem(res)
        })
    }

    return (
        <div className='containerCart'>

            {
                listCartItem.length >= 1 && (
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
            {listCartItem.length <= 0 && <CartNull />}
        </div >
    )
}
