import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { OrdersComponent } from './orders/orders.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { MerchantsModule } from './merchants/merchants.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavigationComponent,
    OrdersComponent,
    PayoutsComponent,
    OrderDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatCheckboxModule,
    FormsModule,
    MerchantsModule,
    MatDatepickerModule,
    // MatNativeDateModule
  ]
})
export class AdminModule { }
