import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/assets/Services/loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm !:FormGroup;
  constructor(private _fb:FormBuilder,private _api:LoginserviceService,private _router:Router) { }

  ngOnInit(): void {
    this.LoginForm=this._fb.group({
      EmailId:[''],
      PassWord:['']
    })
  }
 LogIn(){
   this._api.getData().subscribe(res=>{
     const User=res.find((item:any)=>{
       return item.EmailId==this.LoginForm.value.EmailId && item.PassWord==this.LoginForm.value.PassWord
     });
     if(User){
       this._router.navigate(['DashBoard'])
       localStorage.setItem("token",User.FullName);
     }
     else{
       alert("User Not Found");
     }
   })
 }
}