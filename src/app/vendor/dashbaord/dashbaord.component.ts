import { Component } from '@angular/core';
import { NewOrderRequest, OrderAwaitingPickup,PreviousOrder } from '../../interfaces/tabel-data';

const New_Order_Request_Data: NewOrderRequest[] = [
  { orderNo: 1234, order_received_time: '5 mins ago', price: 1170.10, productsQty: 2, timer: '02:34', orderStatus: 0},
  { orderNo: 2234, order_received_time: '12 mins ago', price: 223.60,  productsQty: 1, timer: '04:34',orderStatus: 1},
  { orderNo: 3343, order_received_time: '3 mins ago', price: 1170.10, productsQty: 3, timer: '', orderStatus: 2},
];
const Order_Awaiting_Pickup: OrderAwaitingPickup[] = [
  { orderNo: 1234, accepted_time: '30 mins ago', price: 1170.10, productsQty: 2,  riderEta: '6 minutes away', riderFirstName: 'John', riderLastName:'Smith' ,riderMnumber:984758578 },
  { orderNo: 2234, accepted_time: '25 mins ago', price: 223.60,  productsQty: 1,  riderEta: '30 minutes  away',riderFirstName: 'Paul', riderLastName:'Campbell',riderMnumber:984758578},
  { orderNo: 3343, accepted_time: '2 mins ago', price: 1170.10, productsQty: 3, riderEta: '4 minutes away', riderFirstName: 'Zachary',  riderLastName:'Smith',riderMnumber:984758578},
];
const Previous_Order: PreviousOrder[] = [
  { orderNo: 1234,  shipped: 'Feb 2, 2023 | 10.30 am', price: 1170.10, productsQty: 2},
  { orderNo: 2234,  shipped: 'Feb 2, 2023 | 10.30 am', price: 223.60,  productsQty: 1},
  { orderNo: 3343, shipped: 'Feb 2, 2023 | 10.30 am', price: 1170.10, productsQty: 3},
];


@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent {
  NewOrderDisplayedColumns: string[] = ['orderNo', 'order_received_time',  'productsQty', 'price', 'action' ,'timer' ];
  AwaitingOrderDisplayedColumns: string[] = ['orderNo', 'accepted_time',  'productsQty', 'price', 'rider_info' ,'action' ];
  PreviousOrderDisplayedColumns: string[] = ['orderNo', 'shipped',  'productsQty', 'price' ];
  dataOrderSource = New_Order_Request_Data;
  dataAwaitingOrderSource = Order_Awaiting_Pickup;
  dataPreviousOrder=Previous_Order;
}
