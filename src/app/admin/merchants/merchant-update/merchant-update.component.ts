import { Component,ElementRef, ViewChild, } from '@angular/core';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Emails } from '../listing/listing.component';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonService } from '../../../core/services/common.service';
import { MerchantsDetailsService } from '../../../core/services/merchant/merchants-details.service';
import { ActivatedRoute } from '@angular/router';
import { AddService } from '../../../core/services/merchant/add.service';
declare var google: any;

@Component({
  selector: 'app-merchant-update',
  templateUrl: './merchant-update.component.html',
  styleUrls: ['./merchant-update.component.scss']
})
export class MerchantUpdateComponent {
  @ViewChild('registrationStreetAddress') registrationStreetAddress!: ElementRef;
  @ViewChild('tradingStreetAddress') tradingAddress!: ElementRef;
  @ViewChild('registrationPostCode') registrationPostCode!: ElementRef;
  @ViewChild('tradingPostCode') tradingPostCode!: ElementRef;

  path: number | null | undefined;
  sameAddressCheck: boolean = true;
  // email notification settings
  emailForm: FormGroup;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  EmailList: Emails[] = [  /* { email: 'test@test.com' } */];
  formStatus: string = ''
  countries: any[] = []
  states: any[] = []
  cities: any[] = []
  vendor: any = {
    country_id: 0,
    register_city_id: '0',
    trading_city_id: '0',
    state_id: '0',
    city_id: '0',
    address_line1: "0",
    trading_state_id: 255,
    register_country_id: 255,
    trading_country_id: 255,
    latitude: '',
    longitude: '',
    status: 1
  } // add vendor form object
  private timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
  vendorStatus: [{ id: number; label: string; }] | undefined;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
    description: new FormControl<string | null>(null),
  });
  holidaylist: {
    start_date: Date,
    end_date: Date,
    description: string
  }[] = [];
  
  formatDateDate(inputDate:string) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${year}:${month}:${day}`;
  }
    submitForm(form: any) {
      this.holidaylist.filter((item:any)=>{
        item.start_date = this.formatDateDate(item.start_date)
        item.end_date = this.formatDateDate(item.end_date)
      })
      let updatePayload = {
        ...form.value,
        id: this.path,
        country_id: this.vendor.country_id ?? 0,
        register_city_id: this.vendor.register_city_id,
        trading_city_id: this.vendor.trading_city_id,
        state_id: this.vendor.state_id,
        city_id: this.vendor.city_id,
        address_line1: this.vendor.address_line1,
        trading_state_id: this.vendor.trading_state_id,
        register_country_id: this.vendor.register_country_id,
        trading_country_id: this.vendor.trading_country_id,
        latitude: this.vendor.latitude,
        longitude: this.vendor.longitude,
        vendor_store_time:this.vendor.vendor_store_time,
        email_notification: [],
        vendor_holidays:this.holidaylist
      };
      this.EmailList.map((item) => {
        updatePayload.email_notification.push(item.email)
      });
      
      
      console.log(updatePayload);
  
      
  
      this.updateService.updateVendor(updatePayload).subscribe((data: any) => {
        console.log(data);
        this.formStatus = data.body.message;  
      });

      // if (form.valid) {
  
        // const allvalue = { ...this.vendor.value, 'weekdays': this.allSelectedData(), 'holidays list': this.holdayList() }
      //   console.log((allvalue));
      // }
    }
  operatingHoursItem(hour: { day: string; openingInput: string; closingInput: string; id: number }, id: any) {
    let getIdItem = this.vendor.vendor_store_time.find((item:any)=>item.id === hour.id )
    id.checked ? getIdItem.status = 1 : getIdItem.status = 0
  }
  getOperatingTime(time: any, id: number, type: string) {
    time = time + ":00"
    let getIdItem = this.vendor.vendor_store_time.find((item:any)=>item.id === id)
    type == 'open' ? getIdItem.open_time = time: getIdItem.close_time = time;
  }




  constructor(
    private formBuilder: FormBuilder,
    public commonService: CommonService,
    private userData: MerchantsDetailsService,
    private activatedRoute: ActivatedRoute,
    private updateService: AddService
  ) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  addToHolidayList(start: any, end: any, descriptionItem: string): void {
    const start_date = start;
    const end_date = end;
    const description = descriptionItem;
    if (start_date && end_date && description) {
      this.holidaylist.push({ start_date, end_date, description });
    }
    console.log("Date Ranges:", this.holidaylist);
    this.range.reset();
  }
  deletedata(msg: any) {
    console.warn(msg)
    const index: number = +msg;
    if (index !== -1) {
      console.warn(this.holidaylist.splice(index, 1))
    }

  }
  

  selection = new SelectionModel<{
    day: string; openingInput: string;
    closingInput: string; id: number
  }>(true, []);



  allSelectedData() {
    const selectedData = this.selection.selected;
    return (selectedData);
  }
  sameAddress(yes: boolean) {
    this.sameAddressCheck = !yes;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value && !Validators.email(new FormControl(value))) {
      this.EmailList.push({ email: value });
      event.chipInput!.clear();
    }
  }

  remove(email: Emails): void {
    const index = this.EmailList.indexOf(email);

    if (index >= 0) {
      this.EmailList.splice(index, 1);
    }
  }

  edit(email: Emails, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(email);
      return;
    }
    const index = this.EmailList.indexOf(email);
    if (index >= 0) {
      this.EmailList[index].email = value;
    }
  }

 

  // ADDED UPDATED FORM
  getCountries() {
    this.commonService.getCountries().subscribe(
      (response: any) => {
        // console.log(response);
        this.countries = response.result
      }
    );
  }
  getStates(id: number, selectType?: string) {

    this.commonService.getStates(id).subscribe(
      (response: any) => {
        this.states = response.body.result
      }
    );
  }
  getCities(id: number, selectType?: string) {

    this.commonService.getStates(id).subscribe(
      (response: any) => {
        this.cities = response.body.result
        console.log(this.cities);

      }
    );
  }

  initialize(elementAuto: any, assingPostCode: any) {
    const input = elementAuto.nativeElement;
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      // console.log(place); // Log the place object to see its contents.

      for (let i = 0; i < place.address_components.length; i++) {
        for (let j = 0; j < place.address_components[i].types.length; j++) {
          if (place.address_components[i].types[j] === "postal_code") {
            const postalCode = place.address_components[i].long_name;
            if (assingPostCode == 1) {
              this.vendor.register_zipcode = postalCode;
              this.registrationPostCode.nativeElement.focus();
              console.log(place.geometry['location'].lat());
              console.log(place.geometry['location'].lng());

              this.vendor.latitude = place.geometry['location'].lat(),
                this.vendor.longitude = place.geometry['location'].lng()
            }
            if (assingPostCode == 2) {
              this.vendor.trading_zipcode = postalCode;
              this.tradingPostCode.nativeElement.focus();
              // this.vendor.latitude= place.geometry['location'].lat(),
              // this.vendor.longitude = place.geometry['location'].lng()
            }
            console.log(assingPostCode);

          }
        }
      }
    });
  }
  getUserDetails(id: number) {
    this.userData.vendorDetail(id).subscribe((data: any) => {
      this.vendor = data.body.result  
      this.vendor.email_notification ? this.EmailList = JSON.parse(this.vendor.email_notification).map((item: string) => ({email: item})) : ''
      if(this.vendor.vendor_store_time){
        this.vendor.vendor_store_time.filter((item:any)=>{
          // item.status = false
          item.open_time ? item.open_time = item.open_time.replace(":00", ''): ''
          item.close_time ? item.close_time = item.close_time.replace(":00", ''):''
        })
      }
      if(this.vendor.vendor_holidays){
        this.holidaylist = this.vendor.vendor_holidays
      }
      console.log(this.vendor);
    })
  }

  getStatus() {
    this.commonService.getStatusList().subscribe(
      (response: any) => { this.vendorStatus = response.result.map((label: string, index: number) => ({ id: index, label: label })) }
    );
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.path = Number(data.get('id'));
      this.getUserDetails(this.path);
    });
    // this.getCountries();
    this.getStates(235)

    this.getStatus()

  }
}
