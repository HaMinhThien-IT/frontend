
import axios from "axios";
import { Product } from "../model/Product";

let localHost: string = 'http://localhost:3000'
class ProductController {

 

    listProduct(page: number, search: string, pageSize: number) {
        return axios.post(`${localHost}/product/filter`, { page, search, pageSize }).then(res => {
            return res.data
        }).then()
    }

    getPage(): Promise<Product[]> {
        return axios.get(`${localHost}/page/${1}`).then(res => {
            return res.data.arr
        })
    }

    add(image: string, name: string, price: number): Promise<Product[]> {
        return axios.post(`${localHost}/add`, { image, name, price }).then(res => { return res.data })
    }

    list(): Promise<Product[]> {
        return axios.get(`${localHost}/admin`).then(res => {
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
        return axios.get(`${localHost}/filter/${name}`).then(res => {return res.data})
    }
}
export const productController = new ProductController();