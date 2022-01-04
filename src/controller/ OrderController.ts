import axios from "axios";
import { Cart } from "../model/Cart";
import { Order } from "../model/order";
let localHost: string = 'http://localhost:3000'
class OrderController {
    checkout(ItemOrder: Order): Promise<Order> {
        return axios.post(`${localHost}/order/checkout`, { ItemOrder })
    }
    // getListOrder() {
    //     return axios.get(`${localHost}/order/checkout/list`).then(res => {
    //         return res.data 
    //     })
    // }
    getListOrderProduct(user_id:number){
        return axios.get(`${localHost}/getListOrder/${user_id}`).then(res => {return res.data})
    }
    async cart(id: string, quantity: number, price: number,user_id:number) {
        return axios.post(`${localHost}/order/${id}`, { quantity, price,user_id })
    }
    async listCart(user_id :number) {
        return axios.post(`${localHost}/listCart`,{user_id}).then(res => { return res.data })
    }
    plus(order_product_id:string){       
        return axios.post(`${localHost}/plus`, {order_product_id }).then(res =>{
         return res.data
        })
    }
    minus(order_product_id:string){       
        return axios.post(`${localHost}/minus`, {order_product_id }).then(res =>{
         return res.data
        })
    }
    delete(order_product_id:string){       
        return axios.post(`${localHost}/delete`, {order_product_id }).then(res =>{
         return res.data
        })
    }


}
export const orderController = new OrderController();