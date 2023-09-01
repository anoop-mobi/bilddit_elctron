import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { Emails } from '../listing/listing.component';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { CommonService } from '../../../core/services/common.service';
import { AddressLoaderService } from '../../../core/services/google/address-loader.service';
import { AddService } from '../../../core/services/merchant/add.service';


declare var google: any;
export function numberValidator(control: FormControl): { [key: string]: any } | null {
  const validNumber = /^\d+$/.test(control.value);
  return validNumber ? null : { 'invalidNumber': true };
}
@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss']
})
export class AddMerchantComponent {
  @ViewChild('registrationStreetAddress') registrationStreetAddress!: ElementRef;
  @ViewChild('tradingStreetAddress') tradingAddress!: ElementRef;
  @ViewChild('registrationPostCode') registrationPostCode!: ElementRef;
  @ViewChild('tradingPostCode') tradingPostCode!: ElementRef;
  constructor(
    private formBuilder: FormBuilder,
    public commonService: CommonService,
    private _AddressLoaderService: AddressLoaderService,
    private _AddMerchantService: AddService
  ) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  modalStatus: boolean = false;
  sameAddressCheck: boolean = true;
  countries: any[] = []
  states: any[] = []
  cities: any[] = []
  vendor: any = {
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
    email_notification: []
  } // add vendor form object
  emailForm: FormGroup;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  EmailList: Emails[] = [  /* { email: 'test@test.com' } */];
  formStatus: string = ''
  register_address_line1 = '';
  trading_address_line1 = ''
  modalToggle() {
    if (this.modalStatus == false) {
      this._AddressLoaderService.loadGoogleMapsScript().then(() => {
        // register_address_line1, trading_address_line1
        this.initializeGoogleMap(this.registrationStreetAddress, 1, 'register_address_line1');
        this.initializeGoogleMap(this.tradingAddress, 2, "trading_address_line1");
      }).catch((error: any) => {
        console.error(error);
      });
    }
    this.modalStatus = !this.modalStatus;
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

  submitForm(form: any) {
    if (!this.register_address_line1 && !this.trading_address_line1) {
      this.formStatus = 'Please Enter Valid Address. (Select From given list)'
      return
    }
    this.vendor.register_address_line1 = this.register_address_line1
    this.vendor.trading_address_line1 = this.trading_address_line1
    if (form.valid) {
      // console.log(JSON.stringify(form.value)); // Handle form submission here
      this.EmailList.map((item) => {
        this.vendor.email_notification.push(item.email)
      });
      this._AddMerchantService.createVendors(this.vendor).subscribe((data: any) => {
        this.formStatus = data.body.message
      })
    }
  }


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
      }
    );
  }


  initializeGoogleMap(elementAuto: any, assingPostCode: any, modalName: string) {
    const input = elementAuto.nativeElement;
    const options = {
      componentRestrictions: {country: "uk"}
     };
    const autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      modalName == 'register_address_line1' ? this.register_address_line1 = input.value : this.trading_address_line1 = input.value;

      console.log(place.geometry['location'].lat());
      console.log(place.geometry['location'].lng());
      


      for (let i = 0; i < place.address_components.length; i++) {
        for (let j = 0; j < place.address_components[i].types.length; j++) {
          if (place.address_components[i].types[j] === "postal_code") {
            const postalCode = place.address_components[i].long_name;
            if (assingPostCode == 1) {
              this.vendor.register_zipcode = postalCode;
              this.registrationPostCode.nativeElement.focus();

              this.vendor.latitude = place.geometry['location'].lat(),
                this.vendor.longitude = place.geometry['location'].lng()
                this.vendor.latitude_register = this.vendor.latitude
                this.vendor.longitude_register = this.vendor.longitude
            }
            if (assingPostCode == 2) {
              this.vendor.trading_zipcode = postalCode;
              this.tradingPostCode.nativeElement.focus();
              this.vendor.latitude_trading= place.geometry['location'].lat(),
              this.vendor.longitude_trading = place.geometry['location'].lng()
            }
            console.log(assingPostCode);
          }
        }
      }
    });
  }


  ngOnInit(): void {
    // this.getCountries();
    this.getStates(235)
  }
}
