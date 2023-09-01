import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BildditOrdersComponent } from './bilddit-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { BildditOrdersRoutingModule } from './bilddit-orders-routing.module';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    BildditOrdersComponent,
    OrderDetailsComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    BildditOrdersRoutingModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
  ],
  exports: [OrderListComponent, BildditOrdersComponent]
})
export class BildditOrdersModule { }
