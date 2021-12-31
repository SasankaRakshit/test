import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DashTologinGuard implements CanActivate {
  
  constructor(private _routes:Router){

    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean
    { 
       if(localStorage.getItem('token')==null){
       return true;
     }
     else{
           this._routes.navigate(['/DashBoard']);
           return false;
        }

    
  }
}

