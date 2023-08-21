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
