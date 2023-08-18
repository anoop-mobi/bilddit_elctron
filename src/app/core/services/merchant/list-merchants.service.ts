import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../../../environments/api_url';

@Injectable({
  providedIn: 'root'
})
export class ListMerchantsService {

  constructor(
    private http: HttpClient,
  ) { }
  listVendors(payload:any){
    const url = api.URL + '/api/vendor/list';
    let dataPayload = this.http.post(
      url,
      payload,
      { observe: 'response' }
    )
    return dataPayload;
  }
}
