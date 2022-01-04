import React, { useEffect, useState } from 'react'
import { Product } from '../../../model/Product'
import Model from '../Modal/Model'
import ProductItem from '../product/ProductItem'
import './Reset.css'
import { v4 as uuidv4 } from 'uuid';
import Filter from '../../../components/filter/Filter'
import axios from 'axios'
import { productController } from '../../../controller/ProductController'
import { toast } from 'react-toastify'

export default function TableProduct() {
    const [listProduct, setListProduct] = useState<Product[]>([])
    const [edit, setEdit] = useState<Product>({ id: '', name: '', image: '', price: 1 })
    const [filter, setFilter] = useState<Product>({ id: '', name: '', image: '', price: 1 })
    const [inputSearch, setInputSearch] = useState<string>('')
    useEffect(() => {
        productController.list().then(res => {
            setListProduct(res);
        })
    }, [])
    const onDelete = (id: string): void => {
        productController.delete(id).then(res => setListProduct(res))
        toast.success('Xóa sản phẩm thành công', {
            position: 'top-center',
            autoClose: 3000
        })
    }
    const setDataEdit = (product: Product) => {
        setEdit({ ...product })
    }
    const onData = (product: Product) => {
        if (product.id != '') {
            productController.update(product.image, product.name, product.price, product.id).then(res => setListProduct(res));
            toast.success('Sửa sản phẩm thành công', {
                position: 'top-center',
                autoClose: 3000
            })
        }
        else {

            productController.add(product.image, product.name, product.price).then(res => setListProduct(res)
            )
            toast.success('Thêm sản phẩm thành công', {
                position: 'top-center',
                autoClose: 3000
            })
        }
        setEdit({ id: '', name: '', image: '', price: 1 })
    }
    const search = (name: string) => {
        if (name === "") {
            productController.list().then(res => {
                setListProduct(res);
            })
        } else {
            productController.search(name).then(res => setListProduct(res))
        }

    }
    return (
        <div>

            <Model key={uuidv4()} onAdd={onData} dataEdit={edit} />
            <input type="text" onChange={e => search(e.target.value)} />
            <div className="sticky-table">

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Xóa</th>
                            <th>Sửa</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listProduct.map((item, index) => <ProductItem setDataEdit={setDataEdit} handleDelete={onDelete} product={item} key={index} />)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
