import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantsComponent } from './merchants.component';
import { ListingComponent } from './listing/listing.component';
import { MerchantsRoutingModule } from './merchants-routing.module';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { MerchantUpdateComponent } from './merchant-update/merchant-update.component';


@NgModule({
  declarations: [
    MerchantsComponent,
    ListingComponent,
    AddMerchantComponent,
    MerchantDetailsComponent,
    MerchantUpdateComponent
  ],
  imports: [
    CommonModule,
    MerchantsRoutingModule,
    InfiniteScrollModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatChipsModule
  ]
})
export class MerchantsModule { }
