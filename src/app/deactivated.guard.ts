import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, using } from 'rxjs';
// this is temporarily useless all have done using CanActivated
// routeGuard Like "dashToLogin" and "Guard"
@Injectable({
  providedIn: 'root'
})
export class DeactivatedGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
