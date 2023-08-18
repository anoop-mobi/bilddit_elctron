import { Injectable } from '@angular/core';
import { api } from '../../../environments/api_url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }

  getStatusList() {
    const url = api.URL + '/api/vendor/status-list';
    return this.http.get(url);
  }
  vendorLocationList() {
    const url = api.URL + '/api/global/get-vendor-city';
    return this.http.get(url);
  }

  getCountries() {
    const url = api.URL + '/api/global/get-countries';
    return this.http.get(url);
  }

  getStates(id: any) {
    let payload = {
      country_id: id
    }
    const url = api.URL + `/api/global/get-states`;
    let dataPayload = this.http.post(
      url,
      payload,
      { observe: 'response' }
    )
    return dataPayload;
  }
  getCities(payload: any) {
    const url = api.URL + `/api/global/get-cities?state_id=${payload}`;
    let dataPayload = this.http.post(
      url,
      { observe: 'response' }
    )
    return dataPayload;
  }
}
