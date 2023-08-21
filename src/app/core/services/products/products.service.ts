import { Injectable } from '@angular/core';
import { api } from '../../../../environments/api_url';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getVendorProducts(vendorId:string){
    const url = api.URL + '/api/vendor-product-request-list';
    const payload = {
      id:vendorId
    }
    let dataPayload = this.http.post(
      url,
      payload,
      { observe: 'response' }
    ) 
    return dataPayload
  }


  exportMasterSheet(){
    const url = api.URL + '/api/export-all-master-product'
    let data = this.http.get(url)
    return data
  }


  importVendorProducts(formData: FormData): Observable<any> {
    
    // console.log(formData);
    console.clear()
    console.log(formData.get('file')); 
    console.log(formData.get('vendor_id')); 
    const url = api.URL + '/api/import-vendor-products';
    return this.http.post(url, formData, { observe: 'response' });
  }
}
