
import axios from "axios";
import { authAxios } from "../http";

import { Product } from "../model/Product";

let localHost: string = 'http://localhost:3000'

class ProductController {
    listProduct(page: number, search: string, pageSize: number) {
        return authAxios.post(`${localHost}/product/filter`, { page, search, pageSize }).then(res => {
            return res.data
        })
    }   
    
    add(image: string, name: string, price: number): Promise<Product[]> {
        return axios.post(`${localHost}/add`, { image, name, price }).then(res => { return res.data })
    }
    list() {
        return authAxios.get(`/admin`).then(res => {     
            return res.data
        })
    }
    delete(id: string): Promise<Product[]> {
        return axios.delete(`${localHost}/product/${id}`).then(res => { return res.data })
    }
    update(image: string, name: string, price: number,id:string): Promise<Product[]> {
        return axios.put(`${localHost}/edit/${id}`, { image, name, price }).then(res => { return res.data })
    }
    detail(id: string): Promise<Product> {
        return axios.get(`${localHost}/detail/${id}`).then(res => { return res.data })
    }
    search(name:string){
        return authAxios.get(`${localHost}/filter/${name}`).then(res => {return res.data})
    }
}
export const productController = new ProductController();