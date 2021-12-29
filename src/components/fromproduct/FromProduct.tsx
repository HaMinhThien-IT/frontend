import React, { useState } from 'react'
import { Product } from '../../model/Product'
import './FromProduct.css'
export default function FromProduct(props : ChildComponentProps) {
    const [newProduct,setNewProduct] = useState<Product>(props.dataEdit)
    const [check,setCheck] = useState<boolean>(true)
    const image = check == false ? 'Vui long nhap hinh anh' : ''
    const name = check == false ? 'Vui long nhap ten' : ''
    
    const onBlurImage = () =>{
        if(newProduct.image.length <=0){
            setCheck(false)
        }else{
            setCheck(true)
        }        
    }
       
    return (
        <div className="khoiTrai">
        <div className="from">
            <h3>Thêm sản phẩm</h3>
            <label >Nhập hình ảnh  : </label>
            <input type="text" name="HinhAnh" onChange={e=>{setNewProduct({...newProduct,image:e.target.value})}} value={newProduct.image} onBlur={()=>onBlurImage()}/>
            <small>{image}</small>
            <label >Nhập tên sản phẩm  : </label>
            <input type="text" name="tenSanPham" onChange={e=>{setNewProduct({...newProduct,name:e.target.value})}}value={newProduct.name}/>
            <small></small>
            <label >Nhập giá sản phẩm  : </label>
            <input type="text" name="gia" onChange={e=>{setNewProduct({...newProduct,price:Number(e.target.value)})}}value={newProduct.price}/>
            <small></small>
            <button onClick={()=>props.onAdd(newProduct)}>Thêm sản phẩm</button>
        </div>
    </div>
    )
}
interface ChildComponentProps{
    onAdd : (product : Product) =>void,
    dataEdit : Product
}
