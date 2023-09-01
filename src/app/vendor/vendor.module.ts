import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { VendorRoutingModule } from './vendor-routing.module';
import { RouterModule } from '@angular/router';
import{  NavigationComponent} from  './navigation/navigation.component';
import {MatTableModule} from '@angular/material/table';
import { OrderRequestDetailComponent } from './dashbaord/order-request-detail/order-request-detail.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    VendorComponent,
    DashbaordComponent,
    NavigationComponent,
    OrderRequestDetailComponent,
    
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    RouterModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class VendorModule { }
