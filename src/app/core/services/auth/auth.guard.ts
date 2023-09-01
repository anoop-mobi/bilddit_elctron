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
      return localStorage.getItem('token') && localStorage.getItem('roleId') === '1' && localStorage.getItem('role') === 'Administrator'
        ? true
        : this.route.parseUrl('/login');
  }
  
}
