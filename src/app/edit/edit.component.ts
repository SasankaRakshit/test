import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  //editForm!:FormGroup;
  loginUser=localStorage.getItem('token');
  
   constructor(private _fb:FormBuilder) { }
   editForm=this._fb.group({
    FullName:[''],
    EmailId:[''],
    MobileNumber:['']
  })

  ngOnInit(): void {
  }

}
