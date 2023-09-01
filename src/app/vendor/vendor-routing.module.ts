import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BildditOrdersComponent } from '../bilddit-orders/bilddit-orders.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { OrderRequestDetailComponent } from './dashbaord/order-request-detail/order-request-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component:DashbaordComponent
  },
  {
    path: 'dashboard/order-request-detail/:order_id',
    component:OrderRequestDetailComponent
  },

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorRoutingModule { }
