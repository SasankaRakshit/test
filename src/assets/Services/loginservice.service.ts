import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
//import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private _http:HttpClient ) { }
  getData(){
    return this._http.get<any>("http://localhost:3000/RegisteredUser")
  }
}
