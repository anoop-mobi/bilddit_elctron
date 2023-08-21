import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
// import { VendorListingComponent } from './vendor-listing/vendor-listing.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component:DashboardComponent,
        
      },

      {
        path: 'merchants',
        component:MerchantsComponent,
        loadChildren: () =>
        // src\app\base\admin\vendor-listing\vendor-listing.module.ts
          import('./merchants/merchants.module').then(
            (m) => m.MerchantsModule
          ),
      },
      {
        path: 'orders',
        component:OrdersComponent,
        
      },
      {
        path: 'orders-detail',
        component:OrderDetailComponent,
        
      },
      
      {
        path: 'payouts',
        component:PayoutsComponent
      }
      
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
