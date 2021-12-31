import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { request } from 'http';

@Injectable()

export class CommonInterceptor implements HttpInterceptor 
{

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
//     const token: string=localStorage.getItem('token');
//     if(token){
//       request=request.clone({headers:request.headers.set('Authorization','beare'+token)});
//     }
//     if(!request.headers.has('Content-Type')){
//     request=request.clone({headers:request.headers.set('Content-Type','application/json')});
//     }
//     request=request.clone({headers:request.headers.set('Accept','application/json')});
//     // const Api_Key='API123';
//     // const err=new Error('test');
//     return next.handle(request).pipe(
//       map((event:HttpEvent<any>)=>{
// if(event instanceof HttpResponse){}
//       } return event;})
//     )
      
   
  }
}
