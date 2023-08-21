import { Component, Input, ViewChild } from '@angular/core';
import { ProductsMappingPopupsComponent } from '../products-mapping-popups/products-mapping-popups.component';
import { VendorMappedItem } from '../../interfaces/vendor-data';

@Component({
  selector: 'app-merchant-product-mapping',
  templateUrl: './merchant-product-mapping.component.html',
  styleUrls: ['./merchant-product-mapping.component.scss']
})
export class MerchantProductMappingComponent {
  @ViewChild(ProductsMappingPopupsComponent) productMappingPopupsComponent!:ProductsMappingPopupsComponent;
  @Input() reviewMapUrl = 'mapURL'; 
  flagstatus!:number;
  OpenMappingPopup(flagstatus:number){
    this.flagstatus=flagstatus;
    this.productMappingPopupsComponent.productMappingModalToggle()
  }
  
  tabelDataStatus = 'Loading...'
  displayedColumns: string[] = ['product_name', 'erp_product_name', 'status', 'product_id'];
  vendorMappedItems: VendorMappedItem[] = [
    { product_name: 'Yellow Armoured Cable MC Wire', erp_product_name:'Yellow Armoured Cable MC Wire', status : 1, product_id: 1},
    { product_name: 'Brass Basin Mixer Tap Aquant', erp_product_name: 'Brass Basin Mixer Tap Aquant', status  : 0, product_id: 2 },
    { product_name: 'Yellow Armoured Cable MC Wire',  erp_product_name: 'Yellow Armoured Cable MC Wire', status : 1, product_id: 3},
  ];
}
