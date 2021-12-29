export const format = (price : number) =>{
 String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}