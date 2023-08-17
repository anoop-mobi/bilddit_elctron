import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginError = false
  constructor(
    private activatedRoute: ActivatedRoute,
    private authse: AuthService,
    private route: Router
  ) { }

  // vars
  path: any = "";
  formName: undefined | string = "login";
  modalStatus: boolean = false;
  logginMSG: string = '';
  // crossDisable:boolean = true;
  passwordLoginType: boolean = true

  ngOnInit(): void {
    this.path = this.activatedRoute.snapshot.routeConfig?.path;
    if (this.path == 'login') {
      this.formName = 'login'
    } else if (this.path == 'forgot-password') {
      this.formName = 'forgot-password'
    }


    if (localStorage.getItem('token')) {
      if (localStorage.getItem('roleId') === '1' && localStorage.getItem('role') == 'Administrator') {
        this.route.navigate(['admin'])
      } else if (localStorage.getItem('roleId') === '2' && localStorage.getItem('role') == 'Vendor') {
        this.route.navigate(['vendor-dashboard'])
      }

    }
  }

  userLogin(email: string, password: string) {
    if(!email  && !password){
      this.loginError = true
      return
    }
    this.loginError = false
    this.modalStatus = true;
    this.logginMSG = 'loading...'
    this.authse.userLogin(email, password).subscribe((response: any) => {
      const apiResponse = response;
      console.log(apiResponse)
      if (apiResponse.api_response === 'error') {
      }
      this.logginMSG = apiResponse.body.message;

    });
  }

  resetPassword(email: any) {
    this.modalStatus = true;
    this.logginMSG = 'loading...'
    this.authse.resetPassword(email).subscribe((response: any) => {
      const apiResponse = response.body;
      console.log(apiResponse)
      if (apiResponse.status === "success") {
        this.logginMSG = apiResponse.message;
        this.route.navigate(['login']);
        
      }

    });
  }

  modalToggle() {
    this.modalStatus = !this.modalStatus;
  }
  toggleVisiblity() {
    this.passwordLoginType = !this.passwordLoginType;
  }
}
