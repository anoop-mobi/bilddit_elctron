import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
// import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
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
    //   {
    //     path: 'detail/:id',
    //     component:VendorDetailComponent,
    //   },
    //   {
    //     path: 'edit/:id',
    //    component:VendorUpdateComponent,
    //   },
    //   {
    //     path: ':id/products',
    //     component:VendorProductsComponent,
    //   },
    //   {
    //     path: ':id/payouts',
    //     component:VendorPayoutsComponent,
    //   },
    //   {
    //     path:':id/review-product-mapping',
    //     component:VendorProductsMappingComponent,
    //   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantsRoutingModule {}
