import { Product } from "./Product";

export interface Cart {
    id: string,
    order_product_id: string,
    order_id : string
    price: number,
    quantity : number
    product:Product
}

