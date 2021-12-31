import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private _routes:Router){}
  loginUser=localStorage.getItem('token');
  canActivate(
       route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot): boolean{
    if(localStorage.getItem('token')!=null){
      return true;
    }
    else{
          this._routes.navigate(['/Login']);
          return false;
       }
 
  }
  
  
}
