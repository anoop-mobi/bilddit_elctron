import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductsMappingPopupsComponent } from '../products-mapping-popups/products-mapping-popups.component';
import { VendorMappedItem } from '../../interfaces/vendor-data';
import { ProductsService } from '../../core/services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-merchant-product-mapping',
  templateUrl: './merchant-product-mapping.component.html',
  styleUrls: ['./merchant-product-mapping.component.scss']
})
export class MerchantProductMappingComponent implements OnInit {
  path:any;
  constructor(private products: ProductsService, private route:ActivatedRoute) {}
  @ViewChild(ProductsMappingPopupsComponent) productMappingPopupsComponent!: ProductsMappingPopupsComponent;
  @Input() reviewMapUrl = 'mapURL'; 
  flagstatus!: number;
  popupProductName = {
    name:'',
    id:0
  }
  OpenMappingPopup(flagstatus: number, ModalName:string, productId:number) {
    this.flagstatus = flagstatus;
    this.productMappingPopupsComponent.productMappingModalToggle();
    this.popupProductName.name =  ModalName,
    this.popupProductName.id = productId  
    console.log(this.popupProductName);
      
  }
  tabelDataStatus = 'Loading...'
  displayedColumns: string[] = ['product_name', 'erp_product_name', 'status', 'product_id'];
  vendorMappedItems: VendorMappedItem[] = [];
  getList(id?:number) {
   if(id){
    this.products.productMappingAdmin(id).subscribe((data: any) => {
      this.vendorMappedItems = data.body.map((item: any) => {
        return {
          product_name: item?.name,
          sku: item?.sku,
          status: item.vendor_products ? 1 : 0,
          product_id: item?.magento_id,
          erp_product_name: item?.vendor_products?.erp_vendor_products?.product_name
        }
      })
      // console.log('data', this.vendorMappedItems);
    })
   }
  }


  
  ngOnInit(): void {
    this.getList(Number(this.route.snapshot.paramMap.get('id')));
  }
}
