import React, { createContext, ReactNode, useContext, useState } from 'react'

interface propsContextQuantity {
    quantity :number,
    onSetQuantityOrder: (quantity: number) => void
}
const quantityDefault:propsContextQuantity={
    quantity:0 ,
    onSetQuantityOrder: () => {}
}
interface quanTityContextProvider{
    children : ReactNode
}

export const quanTityOrderContext = createContext<propsContextQuantity>(quantityDefault)
export default function ContextOrderQuantity({children}:quanTityContextProvider) {
    const [quantity,setQuantity]= useState<number>(quantityDefault.quantity)
    const onSetQuantityOrder =(quantity:number) =>{
        setQuantity(quantity)
    }
    const data = {quantity,onSetQuantityOrder}
    return (
        <quanTityOrderContext.Provider value={data}>
            {children}
        </quanTityOrderContext.Provider>
    )
}
