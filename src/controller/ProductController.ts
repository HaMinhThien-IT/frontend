
import axios from "axios";
import { Product } from "../model/Product";

class ProductController {
    list(page: Number): Promise<Product[]> {
        return axios.get(`http://localhost:3000/page/${page}`).then(res => {
          
            return res.data.productPage
        })
    }

    listProduct(page:number,search:string,pageSize:number){
        return axios.post('http://localhost:3000/product/filter',{page,search,pageSize}).then(res=>{
            return res.data
        }).then()
    }

    getPage(): Promise<Product[]> {
        return axios.get(`http://localhost:3000/page/${1}`).then(res => {         
            return res.data.arr
        })
    }


    add(product: Product): Promise<Product[]> {
        return axios.post('http://localhost:3000/add', product).then(res => { return res.data })
    }

    delete(id: string): Promise<Product[]> {
        return axios.delete(`http://localhost:3000/product/${id}`).then(res => { return res.data })
    }
    update(product: Product): Promise<Product[]> {
        return axios.put(`http://localhost:3000/edit/${product.id}`, {
            product
        }).then(res => { return res.data })
    }
    detail(id: string): Promise<Product> {
        return axios.get(`http://localhost:3000/detail/${id}`).then(res => { return res.data })
    }
}
export const productController = new ProductController();