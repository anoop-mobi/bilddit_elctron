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

