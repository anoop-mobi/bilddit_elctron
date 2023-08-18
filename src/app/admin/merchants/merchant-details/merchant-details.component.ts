import { Component } from '@angular/core';
import { VendorRevenueElement } from '../../../interfaces/tabel-data';
import { MerchantsDetailsService } from '../../../core/services/merchant/merchants-details.service';
import { Router, ActivatedRoute } from '@angular/router';

const Vendor_Revenue_DATA: VendorRevenueElement[] = [
  { OrderId: '#4342638',date:'Jan 10, 2023', companyTradingName: 'A-Better Plumbing', location: '50 mins ago', totalAmount: 1170.10 },
  { OrderId: '#3426538',date:'Jan 10, 2023',  companyTradingName: 'A-Better Plumbing', location: 'Feb 2, 2023', totalAmount: 223.60 },
  { OrderId: "#4342638", date:'Jan 10, 2023', companyTradingName: 'Above & Beyond',   location: '50 mins ago', totalAmount: 1170.10 },
];
@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss']
})
export class MerchantDetailsComponent {
  path:number | null | undefined;
  displayedColumns: string[] = ['OrderId','companyTradingName', 'date',  'location', 'totalAmount'];
  dataRevenueSource = Vendor_Revenue_DATA;
  constructor(
    public vendorDetailService :MerchantsDetailsService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ){}
  vendorJsonData :any;

  specificVendorDetail(id:number){
   this.vendorDetailService.vendorDetail(id).subscribe((data:any) => {
  // console.log(data.body);
    this.vendorJsonData = data.body.result;
    console.log(this.vendorJsonData);
   })
  }
  ngOnInit(): void {
    // this.path
    this.activatedRoute.paramMap.subscribe((data)=>{
      this.path = Number(data.get('id'));
      this.specificVendorDetail(this.path)
    });
    // console.log(this.path);
  }
}
