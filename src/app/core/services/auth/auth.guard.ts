import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard  {
  constructor(
    private userService:AuthService,
    private route:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {  
      if(localStorage.getItem('token')){
        if(localStorage.getItem('roleId') === '1' && localStorage.getItem('role') == 'Administrator'){  
                  
          return true
        }
        
      } 
      // return true // for development purpose only. uncomment below code 

      else {
        this.route.navigate(['login']);
      }
      return this.userService.isUserLogged;
  }
  
}
