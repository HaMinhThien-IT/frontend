export interface Cart {
    id: string,
    image: string,
    name: string,
    price: number,
    quantity : number
}

export const listCart = () => {
    let listCart = []
    let localTam = localStorage.getItem('cart')
    if (localTam !== null) {
        listCart = JSON.parse(localTam)
    }
    return listCart
}
