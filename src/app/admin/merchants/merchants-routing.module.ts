import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { MerchantUpdateComponent } from './merchant-update/merchant-update.component';
import { MerchantProductMappingComponent } from '../../products/merchant-product-mapping/merchant-product-mapping.component';
import { ProductsComponent } from './products/products.component';
// import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
// import { VendorProductsComponent } from './vendor-products/vendor-products.component';
// import { VendorPayoutsComponent } from './vendor-payouts/vendor-payouts.component';
// import { VendorProductsMappingComponent } from '../../products/vendor-products-mapping/vendor-products-mapping.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'listing',
        pathMatch: 'full'
      },
      {
        path: 'listing',
        component:ListingComponent,
      },
      {
        path: 'detail/:id',
        component:MerchantDetailsComponent,
      },
      {
        path: 'edit/:id',
       component:MerchantUpdateComponent,
      },
      {
        path: 'products/:id',
       component:ProductsComponent,
      },
      {
        path: 'review-product-mapping/:id',
       component:ProductsComponent,
      },
    //   {
    //     path: ':id/products',
    //     component:VendorProductsComponent,
    //   },
    //   {
    //     path: ':id/payouts',
    //     component:VendorPayoutsComponent,
    //   },
      {
        path:':id/review-product-mapping',
        component:MerchantProductMappingComponent,
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantsRoutingModule {}
