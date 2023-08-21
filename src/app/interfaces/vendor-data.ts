export interface VendorProductItem {
    id:number,
    product_name:string,
    product_id: number,
    updated_at:Date,
    sku:string,
    erp_tsi_code:string,
    price:number,
    status:number
}
export interface SelectedErpProduct {
    image : string,
    title :string,
    id :number,
    price:number
} 
export interface VendorPayoutItem {
    order_id: number,
    order_total:number,
    payout_amount:number,
    customer_name: string,
    payout_date: string,
    payout_status: string
}

export interface VendorMappedItem {
    product_name: string,
    erp_product_name:string,
    status:number,
    product_id: number
  }