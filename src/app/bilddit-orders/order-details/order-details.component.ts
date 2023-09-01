import { Component } from '@angular/core';
import { OrderTable } from '../../interfaces/tabel-data';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  tabelDataStatus = 'Loading...'
  displayedColumns: string[] = ['order_product_name', 'order_price', 'order_qty', 'order_total'];
  OrderTableItems: OrderTable[] = [
    { order_product_name: 'Yellow Armoured Cable MC Wire',  order_price: 449.90, order_qty: 2, order_total: 899.80},
    { order_product_name: 'Brass Basin Mixer Tap Aquant',  order_price: 449.90, order_qty: 2, order_total: 899.80 },
    { order_product_name: 'Yellow Armoured Cable MC Wire',  order_price: 449.90, order_qty: 2, order_total: 899.80},
  ];
  timelinestatus = 3;
}
