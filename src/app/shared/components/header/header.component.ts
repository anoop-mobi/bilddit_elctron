import { Component, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ElectronService } from '../../../core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSticky: boolean = false;
  

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const elementOffset = this._el.nativeElement.getBoundingClientRect().top;

    if (elementOffset <= -100 ){
      this.isSticky=true ; 
    }
    else if(elementOffset == 0 ){
      this.isSticky=false; 
    }
   
  }


  loggedIn = this.auth.getLoginStats();
  installApp:boolean = true;
  constructor
    (
      private auth: AuthService,
      private _el: ElementRef,
      private electron:ElectronService
    ) { }
  ngOnInit(): void {
    if (localStorage.getItem('token') && localStorage.getItem('userData')) {
      // this.loggedIn = true;
    }
    if(localStorage.getItem('installApp')){
      this.installApp = false
    }

    console.log();
    
  }
  logout() {
    this.auth.userLogout();
  }
  closeInstallApp(){
    this.installApp = false;
    localStorage.setItem("installApp",'false')
  }


  sendNotification(){
    console.log('test');
    this.electron.sendNotes("Bilddit Notification","Bilddit Notification Testing")
  }
}
