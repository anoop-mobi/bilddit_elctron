import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class vendorAuthGuard {
  constructor(
    private route:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {  
      return localStorage.getItem('token') && localStorage.getItem('roleId') === '2' && localStorage.getItem('role') === 'Vendor'
        ? true
        : this.route.parseUrl('/login');
  }
};
