import React, { useState } from 'react'
import { Product } from '../../../model/Product'
import './Model.css'
export default function Model(props: ChildComponentProps) {
    const [newProduct, setNewProduct] = useState<Product>(props.dataEdit)
    const [checkImg, setCheckImage] = useState<boolean>()
    const [checkName, setCheckName] = useState<boolean>()
    const img = checkImg == false ? 'Vui long nhap anh' : ''
    const name = checkName == false ? 'Vui long nhap ten' : ''
    const onBlur = (node: string) => {
        if (node === 'img') {
            newProduct.image.length < 5 ? setCheckImage(false) : setCheckImage(true)
        } else if (node === 'name') {
            newProduct.name.length < 5 || newProduct.name.length > 20 ? setCheckName(false) : setCheckName(true)
        }
    }

    const onInputImg = () => {
        onBlur('img')
        setCheckImage(true)
    }
    const onInputName = () => {
        onBlur('name')
        setCheckName(true)
    }
    const onInputPrice = () => {
        onBlur('name')
        onBlur('img')
    }
    const checkForom = () => {
        onBlur("name")
        onBlur("img")
        if (checkName == true && checkImg == true) {
            return props.onAdd(newProduct)
        }}

        return (
            <div>
                <div className="wrapper">
                    <a href="#demo-modal ">Thêm sản phẩm</a>
                </div>
                <div id="demo-modal" className="modal">
                    <div className="modal__content">
                        <h1>Modal thêm sản phẩm </h1>
                        <label htmlFor="">Hình ảnh</label>
                        <input type="text" name='hinhanh' onBlur={() => onBlur('img')} onInput={onInputImg} onChange={e => { setNewProduct({ ...newProduct, image: e.target.value }) }} value={newProduct.image} />
                        <small>{img}</small>
                        <label htmlFor="">Tên sản phẩm</label>
                        <input type="text" name='ten' onBlur={() => onBlur('name')} onInput={onInputName} onChange={e => { setNewProduct({ ...newProduct, name: e.target.value }) }} value={newProduct.name} />
                        <small>{name}</small>
                        <label htmlFor="">Giá</label>
                        <input type="text" name='gia' onBlur={() => onBlur('price')} onInput={onInputPrice} onChange={e => { setNewProduct({ ...newProduct, price: Number(e.target.value) }) }} value={newProduct.price} />
                        <div className="modal__footer">
                            <button className='btnAddd' onClick={checkForom}>Thêm sản phẩm</button>
                        </div>
                        <a href="#" className="modal__close close">×</a>
                    </div>
                </div>
            </div>

        )
    }

interface ChildComponentProps {
    onAdd: (product: Product) => void,
    dataEdit: Product
}
