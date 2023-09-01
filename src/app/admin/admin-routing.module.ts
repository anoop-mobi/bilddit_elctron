import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { BildditOrdersComponent } from '../bilddit-orders/bilddit-orders.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,

  },

  {
    path: 'merchants',
    component: MerchantsComponent,
    loadChildren: () =>
      // src\app\base\admin\vendor-listing\vendor-listing.module.ts
      import('./merchants/merchants.module').then(
        (m) => m.MerchantsModule
      ),
  },
  {
    path: 'orders',
    component: BildditOrdersComponent,
    loadChildren: ()=>
    import('../bilddit-orders/bilddit-orders.module').then(
      (m) => m.BildditOrdersModule
    ),  
  },
  

  {
    path: 'payouts',
    component: PayoutsComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
