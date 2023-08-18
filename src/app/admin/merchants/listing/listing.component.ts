import { Component, ViewChild } from '@angular/core';
import { AddMerchantComponent } from '../add-merchant/add-merchant.component';
import { ListMerchantsService } from '../../../core/services/merchant/list-merchants.service';
import { CommonService } from '../../../core/services/common.service';



export interface Emails {
  email: string;
}
export interface VendorItem {
  id: number,
  first_name: string,
  type: number,
  status: number,
  vendor_products_count: number
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  @ViewChild(AddMerchantComponent) addVendorComponent!: AddMerchantComponent;
  openModalInChild() {
    this.addVendorComponent.modalToggle();
  }
  tabelDataStatus = 'Loading...'
  tableDataPage = 1;
  vendorLocations: any;
  // email notification settings
  modalStatus: boolean = false;
  vendorStatus = [];
  vendorStatusUpdate: boolean = false;
  constructor(
    public vendorService: ListMerchantsService,
    public commonService: CommonService
  ) { }
  getStatus() {
    this.commonService.getStatusList().subscribe(
      (response: any) => {

        this.vendorStatus = response.result
        if (!this.vendorStatusUpdate) {
          this.vendorItems.forEach((item) => {
            item.status = this.vendorStatus[item.status]
          })
        }

        this.vendorStatusUpdate = true

      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  getVendorLocations() {
    this.commonService.vendorLocationList().subscribe(
      (response: any) => {
        this.vendorLocations = response.result
        // console.log(this.vendorLocations);




      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  mapVendorData(vendorData: any[]): VendorItem[] {
    return vendorData.map(({ first_name, type, status, id, vendor_products_count, city }: any) => {
      this.vendorStatusUpdate ? status = this.vendorStatus[status] : '';
      type == 1 ? type = 'ERP' : (type == 2 ? type = 'Non ERP' : type = "-");
      city ? city = city.city_name : city = '-';
      return { id, first_name, type, status, vendor_products_count, city };
    });
  }
  displayedColumns: string[] = ['first_name', 'vendor_products_count', 'type', 'status', 'location', 'id'];
  vendorItems: VendorItem[] = [];
  payload: any = {
    keyword: '',
    type: '',
    status: '',
    city_id: ''
  };
  onScroll() {
    // console.log(this.payload);
    this.loadMore()
  }
  vendorListing(loadMoreDetails?: number) {
    this.tabelDataStatus = 'Loading...'
    loadMoreDetails ? this.payload.page = loadMoreDetails : (this.payload.page = 1, this.tableDataPage = 2);
    this.vendorService.listVendors(this.payload).subscribe((data: any) => {
      this.tabelDataStatus = 'No Data Found'
      if (loadMoreDetails) {
        let filteredData = this.mapVendorData(data.body.result.data)
        this.vendorItems = [...this.vendorItems, ...filteredData]
      } else {
        this.vendorItems = this.mapVendorData(data.body.result.data);
      }
    });
  }
  updateFilters() {
    this.vendorListing();
    // console.log(this.payload);
  }
  loadMore() {
    this.tableDataPage++
    this.vendorListing(this.tableDataPage)
  }
  adminModalStatus(status: any) {
    return true
  }
  ngOnInit(): void {
    this.getStatus();
    this.vendorListing();
    this.getVendorLocations();
    // this.searchVendors();
  }
}
