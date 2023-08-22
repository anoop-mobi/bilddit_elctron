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
  @ViewChild(ProductsMappingPopupsComponent) productMappingPopupsComponent!: ProductsMappingPopupsComponent;
  @ViewChild(ProductImportModalComponent) productImportModalComponent!: ProductImportModalComponent;

  @Input() routerURL: string = '';
  flagstatus!: number;

  productStatus: string[] = ['Selling', 'Not Selling', 'Mapped', 'Unmapped'];
  ProductItems: VendorProductItem[] = [];

  payload: any = {
    keyword: '',
    status: this.productStatus
  };

  constructor(public products: ProductsService) { }

  openImportModal() {
    this.productImportModalComponent.importModalToggle();
  }

  OpenMappingPopup(flagstatus: number) {
    this.productMappingPopupsComponent.productMappingModalToggle();
    this.flagstatus = flagstatus;
  }

  getProducts() {
    console.clear()
    this.products.getVendorProducts('2').subscribe((data: any) => {
      this.ProductItems = data.body.result.data;
      console.log(data)
    });
  }

  getMasterProductCSV() {
    this.products.exportMasterSheet().subscribe((data: any) => {
      console.log(data.result);
      return new ngxCsv(data.result, 'My Report');
    });
  }

  ngOnInit(): void {
    this.getProducts();
    // this.getMasterProductCSV();
  }
}
