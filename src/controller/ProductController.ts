
import axios from "axios";
import { Product } from "../model/Product";

let localHost:string = 'http://localhost:3000'
class ProductController {
  
    list(page: Number): Promise<Product[]> {
        return axios.get(`${localHost}/page/${page}`).then(res => {
          
            return res.data.productPage
        })
    }

    listProduct(page:number,search:string,pageSize:number){
        return axios.post(`${localHost}/product/filter`,{page,search,pageSize}).then(res=>{
            return res.data
        }).then()
    }

    getPage(): Promise<Product[]> {
        return axios.get(`${localHost}/page/${1}`).then(res => {         
            return res.data.arr
        })
    }


    add(product: Product): Promise<Product[]> {
        return axios.post(`${localHost}/add`, product).then(res => { return res.data })
    }

    delete(id: string): Promise<Product[]> {
        return axios.delete(`${localHost}/product/${id}`).then(res => { return res.data })
    }
    update(product: Product): Promise<Product[]> {
        return axios.put(`${localHost}/edit/${product.id}`, {
            product
        }).then(res => { return res.data })
    }
    detail(id: string): Promise<Product> {
        return axios.get(`${localHost}/detail/${id}`).then(res => { return res.data })
    }
}
export const productController = new ProductController();