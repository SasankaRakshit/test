import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
//import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http:HttpClient ) { }
  postData(data:any)
  {
    return this._http.post<any>("http://localhost:3000/RegisteredUser",data)
  }
}
