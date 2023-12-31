import { HttpClient } from '@angular/common/http';
import { Injectable, effect, signal } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {api} from '../../../../environments/api_url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role_id: string = '';
  private token: string = '';
  userLoginStatus = signal(false);
  

  isUserLogged = new BehaviorSubject<boolean>(false);
  isVendorUserLogged = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private route: Router,
  ) { 
    if(localStorage.getItem('token')){
      this.userLoginStatus.set(true)
    } else {
      this.userLoginStatus.set(false)
    }
  }

  userLogin(userEmail: string, userPassword: string): Observable<any> {
    const url = api.URL + '/api/login';
    const payload = {
      email: userEmail,
      password: userPassword
    };

    let dataPayload = this.http.post(
      url,
      payload,
      { observe: 'response' }
    )

    dataPayload.subscribe(async (response: any) => {
      console.log('1', response);
      const apiResponse = response.body;
      console.log(apiResponse);

      if (apiResponse.status === 'success') {




        // console.log( this.fileService.triggerFunction("dealerCode", "path", "filename"));

        
        this.userLoginStatus.set(true)
        this.token = apiResponse.result.token;
        const fullName = apiResponse.result.full_name;
        const roleId = apiResponse.result.role_id;
        const role = apiResponse.result.role;

        localStorage.setItem('token', this.token);
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('roleId', roleId);
        localStorage.setItem('role', role);
        localStorage.setItem('userData', JSON.stringify(apiResponse));
        
        if (roleId === 2) {
          this.route.navigate(['vendor']);
          this.isVendorUserLogged.next(true)
        } else if (roleId === 1) {
          // const navigationExtras: NavigationExtras = {
          //   queryParams: { role: roleId, token: this.token }
          // };

          this.route.navigate(['admin'] /*, navigationExtras */);
          this.isUserLogged.next(true);
        } else {

        }
      }
    }
      // ,(error) => {
      //   console.error('Error while calling API:', error);
      // }
    )


    return dataPayload;
  }

  


  resetPassword(email: string) {
    const url = api.URL + '/api/password_reset';
    const payload = {
      email: email
    }
    let dataPayload = this.http.post(
      url,
      payload,
      { observe: 'response' }
    )
    dataPayload.subscribe((result) => {
      console.log(result);
    })

    return dataPayload
  }


  userLogout() {
    const url = api.URL + '/api/logout';
    let dataPayload = this.http.post(
      url,
      { observe: 'response' }
    )
    dataPayload.subscribe((result) => {
      console.log(result);      
    })
    localStorage.clear();
    this.userLoginStatus.set(false);
    this.route.navigate(['login'])
    return dataPayload
  }





  getToken() {
    return localStorage.getItem('token');
  }


  getLoginStats() {
    return this.isUserLogged.asObservable()
  }
}
