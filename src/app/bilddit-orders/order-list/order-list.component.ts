import { Component } from '@angular/core';
import { Orderdata } from '../../interfaces/order-data';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  tabelDataStatus = 'Loading...'
  orderStatus: string[] = ['Accepted', 'Rejected', 'Processing', 'Shipped'];
  merchantsData: string[] = ['Laura L. Burger', 'Manson', 'Patricia Freeman', 'Julie Lee'];
  
  displayedColumns: string[] = ['product_name', 'erp_product_name', 'status', 'product_id'];
  vendorMappedItems: Orderdata[] = [
    { order_id: '6385638-1', order_time:'Feb 2, 2023',order_amount:2798.90,customer_name:'Dennis',merchant_name:'Richard George', order_status:'Accepted' },
    { order_id: '6385638-2', order_time: '50 mins ago',order_amount:11.00, customer_name:'Dennis',merchant_name:'Richard George', order_status:'Rejected' },
    { order_id: '7812792',  order_time: 'Feb 2, 2023', order_amount:129.90,customer_name:'Dennis', merchant_name:'Richard George', order_status:'Shipped'},
  ];
}
