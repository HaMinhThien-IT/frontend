import axios from "axios";
import { authAxios } from "../http";
import { BuyUser } from "../model/BuyUser";
let localHost: string = 'http://localhost:3000'
class OrderController {
    checkout(user:BuyUser,order_id:string){
        return axios.post(`${localHost}/checkout`,{user,order_id})
    }
    getListOrderProduct(user_id:number,pageSize:number,page:number){
        return axios.post(`${localHost}/getListOrder/${user_id}`,{pageSize,page}).then(res => {return res.data})
    }
    async cart(id: string, quantity: number, price: number,user_id:number) {
        return axios.post(`${localHost}/order/${id}`, { quantity, price,user_id })
    }
    async listCart(user_id :number) {
        return authAxios.post(`${localHost}/listCart`,{user_id}).then(res => { return res.data })
    }
    plus(order_product_id:string,user_id:number){       
        return axios.post(`${localHost}/plus`, {order_product_id ,user_id}).then(res =>{
         return res.data
        })
    }
    minus(order_product_id:string,user_id:number){       
        return axios.post(`${localHost}/minus`, {order_product_id,user_id }).then(res =>{
         return res.data
        })
    }
    delete(order_product_id:string,user_id:number){       
        return axios.post(`${localHost}/delete`, {order_product_id ,user_id}).then(res =>{
         return res.data
        })
    }


}
export const orderController = new OrderController();