import axios from "axios";
import { Order } from "../model/order";

class OrderController {
    checkout(ItemOrder : Order) :Promise<Order>{
        return axios.post('http://localhost:3000/order/checkout',{ItemOrder})
    }
    getListOrder (){
        return axios.get('http://localhost:3000/order/checkout/list').then(res => {          
            return res.data
        })
    }
}
export const orderController = new OrderController();