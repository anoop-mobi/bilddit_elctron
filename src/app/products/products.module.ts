import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductImportModalComponent } from './product-import-modal/product-import-modal.component';
import { ProductsMappingPopupsComponent } from './products-mapping-popups/products-mapping-popups.component';
import { MerchantProductMappingComponent } from './merchant-product-mapping/merchant-product-mapping.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { register } from 'swiper/element/bundle';


register();


@NgModule({
  declarations: [
    ProductsComponent,
    ProductImportModalComponent,
    ProductsMappingPopupsComponent,
    MerchantProductMappingComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    RouterModule,
    MatRadioModule,
    MatTableModule,
    MatExpansionModule,
   
  ],
  exports: [ProductsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsModule { }
