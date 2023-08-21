import { Component, Input, ViewChild } from '@angular/core';
import { ngxCsv } from 'ngx-csv';
import { ProductsService } from '../core/services/products/products.service';
import { VendorProductItem } from '../interfaces/vendor-data';
import { ProductImportModalComponent } from './product-import-modal/product-import-modal.component';
import { ProductsMappingPopupsComponent } from './products-mapping-popups/products-mapping-popups.component';

@Component({
  selector: 'app-products-main',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @ViewChild(ProductsMappingPopupsComponent) productMappingPopupsComponent!:ProductsMappingPopupsComponent;
  @ViewChild (ProductImportModalComponent) productImportModalComponent! :ProductImportModalComponent
  openImportModal(){
  this.productImportModalComponent.importModalToggle();
  }
  
  @Input() routerURL: string = '';
  // productUploadedStatus:string = '';
  flagstatus!:number;
  constructor(public products:ProductsService){}
  OpenMappingPopup(flagstatus:number){
    this.productMappingPopupsComponent.productMappingModalToggle()
    this.flagstatus=flagstatus;
  }
  productStatus: string[] = ['Selling', 'Not Selling', 'Mapped', 'Unmapped'];
  ProductItems:VendorProductItem[] = [] 

  payload: any = {
    keyword: '',
    status:this.productStatus
  };

  getProducts(){
    let id = '2'
    this.products.getVendorProducts(id).subscribe((data:any)=>{
      // console.log(data.body.result.data);
      this.ProductItems = data.body.result.data
      
    })
  }


  getMasterProductCSV(){
    this.products.exportMasterSheet().subscribe((data:any)=>{
      console.log(data.result);
      return new ngxCsv(data.result, 'My Report');

    })
  }

  ngOnInit(): void {
    this.getProducts();
    // this.getMasterProductCSV();
  }
}
