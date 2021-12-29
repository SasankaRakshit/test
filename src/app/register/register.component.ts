import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/assets/Services/register-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
RegisterForm !:FormGroup;
  constructor(private _fb:FormBuilder,private _api:RegisterService,private _router:Router) { }

  ngOnInit(): void {
    this.RegisterForm=this._fb.group({
      FullName:[''],
      EmailId:[''],
      PassWord:['']
    })
  }
  SignUp(){
this._api.postData(this.RegisterForm.value).subscribe(res=>{alert("Registerd SuccesFully")});
this.RegisterForm.reset();
this._router.navigate(['Login']);
  }
}
