import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
//import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(private _http:HttpClient) { }
  postData(data:any)
  {
    return this._http.post<any>("http://localhost:3000/posts",data)
  }
  getData(){return this._http.get<any>("http://localhost:3000/posts")}

updateData(data:any,id:number){
  return this._http.put<any>("http://localhost:3000/posts"+id,data)
}
deleteData(id:number){
  return this._http.delete<any>("http://localhost:3000/posts/"+id)
}
}
