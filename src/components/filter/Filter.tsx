import React, { useState } from 'react'
import './Filter.css'
import { listProducts, Product } from '../../model/Product'

export default function Filter(props : ChildComponentProps) {
    const [filter,setFilter] = useState<Product>(props.data)

    
    return (
        <div className='search'>
           
            <input className='input' type="text" placeholder='Tìm kiếm sản phẩm ' name='nameFilter' onChange={e=>{setFilter({...filter,name:e.target.value})}}/>
            <button className='btnFilter'onClick={()=>props.onFilter(filter.name)}>Tim kiem</button>
        </div>
    )
}
interface  ChildComponentProps {
    onFilter : (product : string) =>void,
    data : Product
}
