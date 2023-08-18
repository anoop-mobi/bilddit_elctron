import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../../../environments/api_url';

@Injectable({
  providedIn: 'root'
})
export class MerchantsDetailsService {

  constructor(
    private http:HttpClient,
  ) { }

  vendorDetail(id:number){
    const url = api.URL + '/api/vendor/detail';
    const payload ={
     id:id
    };
    let dataPayload = this.http.post(
      url,
      payload,
      {observe:'response'}

    )
    return dataPayload;
  }
}
