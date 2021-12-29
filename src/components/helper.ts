export const formatMoney = (value:number, character = '.') =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, character)
