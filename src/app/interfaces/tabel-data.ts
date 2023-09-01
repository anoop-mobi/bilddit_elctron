export interface TabelData {
    orderNo: number;
    orderOn: string;
    totalAmount: number;
    customerName: string;
    vendorName: string;
}

export interface RevenueElement {
    vendorName: string;
    companyTradingName: string;
    location: string;
    totalAmount: number;
  
}
export interface VendorRevenueElement {
    OrderId: string;
    companyTradingName: string;
    date:string;
    location: string;
    totalAmount: number;
  
}

export interface OrderTable{
    order_product_name: string,
    order_price: number,
    order_qty :number,
    order_total: number
}
export interface NewOrderRequest{
    orderNo : number,
    order_received_time : string,
    productsQty: number,
    price: number,
    timer:string,
    orderStatus: number
}

export interface OrderAwaitingPickup{
    orderNo:number,
    accepted_time: string,
    productsQty: number,
    price:number,
    riderFirstName:string,
    riderLastName: string,
    riderMnumber:number,
    riderEta :string
}
export interface PreviousOrder{
    orderNo:number,
    shipped: string,
    productsQty: number,
    price:number,
}
export interface OrderRequestDetailData {
    orderProductImage:string,
    orderProductTitle:string,
    orderProductPrice: number,
    orderProductQty: number,
    orderProductTotalPrice:number,
}