import { Component } from '@angular/core';
import { RevenueElement, TabelData } from '../../interfaces/tabel-data';

const Monthly_Order_Data: TabelData[] = [
  { orderNo: 1, orderOn: '50 mins ago', totalAmount: 1170.10, customerName: 'James McDonald', vendorName: 'Jason McCool' },
  { orderNo: 2, orderOn: 'Feb 2, 2023', totalAmount: 223.60, customerName: 'James McDonald', vendorName: 'Jason McCool' },
  { orderNo: 3, orderOn: '50 mins ago', totalAmount: 1170.10, customerName: 'Julia Rana', vendorName: "Jason McCool" },
];
const Revenue_DATA: RevenueElement[] = [
  { vendorName: 'Jason McCool', companyTradingName: 'A-Better Plumbing', location: '50 mins ago', totalAmount: 1170.10 },
  { vendorName: 'Jason McCool', companyTradingName: 'A-Better Plumbing', location: 'Feb 2, 2023', totalAmount: 223.60 },
  { vendorName: "Jason McCool", companyTradingName: 'Above & Beyond',   location: '50 mins ago', totalAmount: 1170.10 },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  orderDisplayedColumns: string[] = ['orderNo', 'orderOn', 'totalAmount', 'customerName', 'vendorName'];
  dataOrderSource = Monthly_Order_Data;
  displayedColumns: string[] = ['vendorName', 'companyTradingName', 'location', 'totalAmount'];
  dataRevenueSource = Revenue_DATA;
}
