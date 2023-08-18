import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../../../environments/api_url';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(
    private http: HttpClient,
  ) { }
  createVendors(payload:any){
    
    const url = api.URL + '/api/vendor/create';
    let dataPayload = this.http.post(
      url,
      payload,
      { observe: 'response' }
    )
    return dataPayload;
  }

  updateVendor(payload:string){
    const url = api.URL + '/api/vendor/update';
    let dataPayload = this.http.post(
      url,
      payload,
      { observe: 'response' }
    )
    return dataPayload;

  }
}
