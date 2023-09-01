import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { OrderRequestDetailData } from '../../../interfaces/tabel-data';

const Order_Request_Detail_Data : OrderRequestDetailData[] =
  [
    { 
      orderProductImage:'assets/images/product-image.jpg',
      orderProductTitle:'Yellow Armoured Cable MC Wire', 
      orderProductPrice:120, 
      orderProductQty:2,
      orderProductTotalPrice:240
    },
    { 
      orderProductImage:'assets/images/product-image.jpg',
      orderProductTitle:'Yellow Armoured Cable MC Wire', 
      orderProductPrice:120, 
      orderProductQty:2,
      orderProductTotalPrice:240
    },
    { 
      orderProductImage:'assets/images/product-image.jpg',
      orderProductTitle:'Yellow Armoured Cable MC Wire', 
      orderProductPrice:120, 
      orderProductQty:2,
      orderProductTotalPrice:240
    },
    { 
      orderProductImage:'assets/images/product-image.jpg',
      orderProductTitle:'Yellow Armoured Cable MC Wire', 
      orderProductPrice:120, 
      orderProductQty:2,
      orderProductTotalPrice:240
    },
  ];

@Component({
  selector: 'app-order-request-detail',
  templateUrl: './order-request-detail.component.html',
  styleUrls: ['./order-request-detail.component.scss']
})
export class OrderRequestDetailComponent {
  displayedColumns: string[] = ['select', 'product', 'quantity', 'price'];
  dataSource = new MatTableDataSource<OrderRequestDetailData>(Order_Request_Detail_Data);
  selection = new SelectionModel<OrderRequestDetailData>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
     console.log(this.selection);
  }


  
}
