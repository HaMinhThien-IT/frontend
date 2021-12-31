import React, { useEffect, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import { productController } from '../../../controller/ProductController'
import { listProducts, Product } from '../../../model/Product'
import ProductHome from '../productHome/ProductHome'


export default function IndexRight() {
    const [listProduct, setListProduct] = useState<Product[]>([])
    const [inputSearch, setInputSearch] = useState<string>('')
    const [count, setCount] = useState([{}]);

    const [pageNumber, setPageNumber] = useState<number>(1)
    useEffect(() => {     
            productController.listProduct(1, '', 4).then(res => {
                setListProduct(res.product);
                
                setCount(res.arr)
            })

    }, [])
    const onNumber = (id: number) => {
        if(inputSearch !== null){
           productController.listProduct(id, '', 4).then(res => {
            setListProduct(res.product);
            setPageNumber(id)
        }) 
        }else{
            productController.listProduct(id, inputSearch, 4).then(res => {
                console.log(res.product);
                setPageNumber(id)
                setCount(res.arr)
            })  
        }
        
    }
    const nextPage = () => {
        if (pageNumber > 1) {

            onNumber(pageNumber - 1)

        }
    }
    const pevPage = () => {
        if (pageNumber < count.length) {

            onNumber(pageNumber + 1)

        }
    }
    const  search = (name : string) =>{
        if( name == ""){
            productController.listProduct(1, '', 4).then(res => {
                setListProduct(res.product);      
                setInputSearch(name)
            })
        }
        else{
            productController.listProduct(1,name,4).then(res => { 
            setListProduct(res.product )
            setCount(res.arr)
        })
            
        }
    }


    return (
        <div className="khoiPhai">
            <div className="slider" id="slider">
                <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Banner%20%C4%90%E1%BB%93%20Nam.jpg" />
            </div>
            {/* aos */}
            <div className="hinhAnhAos" id="aopart">
                <div className="anhTrai " data-aos="fade-up">
                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Banner%20%C4%90%C3%B4i%201.png" />
                </div>
                <div className="anhPhai " data-aos="fade-up">
                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Banner%20%C4%90%C3%B4i%202.png" />
                </div>
            </div>
            {/* aosPart2 */}
            <div className="aosPart2" id="ao">
                <div className="anhTrai2" data-aos="fade-right" data-aos-duration={500}>
                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Banner%20vu%C3%B4ng%20l%E1%BB%9Bn%20(1)%20(1).png" />
                </div>
                <div className="anhPhai2">
                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Artboard%2025.png" data-aos="flip-left" />
                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Artboard%2026.png" id="anh2" data-aos="flip-left" />
                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Artboard%2027.png" data-aos="flip-left" />
                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Artboard%2028.jpg" id="anh2" data-aos="flip-left" />
                </div>
            </div>
            <div className="banner" id="banner">
                <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Artboard%2031.jpg" />
            </div>
            <div className="sreach">
                <input type="text" placeholder='Tìm kiếm ...'  onChange={e => { search
                    (e.target.value) }} />

            </div>
            <div className="newArr">

                <div className="pagination">
                    <button className={`GOTO ${pageNumber === 1 ? "active" : ''}`} onClick={nextPage} > <i className="fas fa-arrow-left"></i> </button>
                    {count.map((item, index) => <button className={`btnPage ${pageNumber === index + 1 ? 'btnPageActive' : ''
                        } `} onClick={() => onNumber(index + 1)} key={index}>{index + 1}</button>)}
                    <button className={`GOTO ${pageNumber === count.length ? "active" : ''}`} onClick={pevPage}> <i className="fas fa-arrow-right"></i></button>
                </div>

            </div>
            <div id="danhSachSanPham">
                {listProduct.map((item, index) => <ProductHome key={index} product={item} />)}
            </div>

            <div className="video" id="video">
                <iframe width="100%" height={600} src="https://www.youtube.com/embed/M4gYNVVCnbk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                <h2>Hệ thống cửa hàng</h2>
                <div className="system-store">
                    <button className="btn-system"><span>ĐỊA CHỈ HỆ THỐNG CỬA HÀNG</span></button>
                </div>
            </div>
            <Footer />
        </div>

    )
}
