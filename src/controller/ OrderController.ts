import axios from "axios";
import { Order } from "../model/order";
let localHost:string = 'http://localhost:3000'
class OrderController {
    checkout(ItemOrder : Order) :Promise<Order>{
        return axios.post(`${localHost}/order/checkout`,{ItemOrder})
    }
    getListOrder (){
        return axios.get(`${localHost}/order/checkout/list`).then(res => {          
            return res.data
        })
    }
}
export const orderController = new OrderController();