import React, { useEffect, useState } from 'react'
import { orderController } from '../../controller/ OrderController'
import { Order, OrderWithDetail } from '../../model/order'
import './Checkout.css'
import CheckOutItem from './checkoutItem/CheckOutItem'
export default function CheckOut() {
    const [listOrder, setListOrder] = useState<OrderWithDetail[]>([])
    const [countPage, setCountPage] = useState([{}]);
    const [pageNumber, setPageNumber] = useState<number>(1)
    useEffect(() => {
        orderController.getListOrderProduct(3, 1, 1).then(res => {
            setListOrder(res.listOrder);
            setCountPage(res.quantityPage)
        })
    }, [])
    const goToPage = (numberPage:number) =>{
        orderController.getListOrderProduct(3, 1, numberPage).then(res => { 
            setListOrder(res.listOrder);
            setCountPage(res.quantityPage);
            setPageNumber(numberPage)
        })
    }
    const nextPageOrder = () =>{
        if(pageNumber < countPage.length){
             goToPage(pageNumber +1)
        }
       
    }
    const pevPageOrder = () =>{
        if(pageNumber > 1){
             goToPage(pageNumber - 1)
        }
       
    }


    return (
        <div className='containerOrder1'>
            <h1 className="history">Order history</h1>
            {
                listOrder.map((item, index) => <CheckOutItem orderWithDetail={item} key={index} />)
            }
           <div className="buttonNumberPage">
           <button className={`nextPage ${pageNumber === 1 ? 'nextPageActive': ''}`} onClick={pevPageOrder}><i className="fas fa-chevron-left"></i>
            </button>
           {countPage.map((item,index)=> <button key={index} className={`numberPage ${pageNumber === index +1 ? 'numberPageActive': ''}`} onClick={()=>goToPage(index+1)}>{index+1}</button>)}
            <button className={`nextPage ${pageNumber === countPage.length ? 'nextPageActive': ''}`} onClick={nextPageOrder}><i className="fas fa-chevron-right" />

            </button>
           </div>


        </div>
    )
}
