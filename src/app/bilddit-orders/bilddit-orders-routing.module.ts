import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
// import { VendorListingComponent } from './vendor-listing/vendor-listing.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component:OrderListComponent,
        
      },
      {
        path: 'details/:id',
        component:OrderDetailsComponent,
        
      },
      
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BildditOrdersRoutingModule {}
