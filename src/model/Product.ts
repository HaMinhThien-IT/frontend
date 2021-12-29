export interface Product {
    id: string,
    image: string,
    name: string,
    price: number
}

export const listProducts = () => {
    let listProductLocal = []
    let localTam = localStorage.getItem('product')
    if (localTam !== null) {
        listProductLocal = JSON.parse(localTam)
    }
    return listProductLocal
}

