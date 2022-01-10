import React from 'react'
import { Product } from '../../../model/Product'
import './Product.css'
interface props {
    product : Product,
    handleDelete : (id : string) => void ,
    setDataEdit : (course : Product) => void    
}
export default function ProductItem(props : props) {
    return (
     
              <tr >
                        <td>
                           {props.product.id}
                        </td>
                        <td><div className="user">
                            <img src={props.product.image} alt="" />

                        </div></td>
                        <td>{props.product.name}</td>
                        <td>{props.product.price}</td>
                        <td><i className="fas fa-trash del" onClick={()=>props.handleDelete(props.product.id)}/></td>
                        <td> <a href="#demo-modal"><i className="fas fa-tools edit" onClick={()=>props.setDataEdit(props.product)}/></a></td>
                      

                    </tr>
        
    )
}
