import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { JsonApiService } from 'src/assets/Services/dash-board.service';
import { DataModel } from './dashBoard.Model';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  dashBoardForm !:FormGroup;
data !:any;
loginUser=localStorage.getItem('token');

modelObj:DataModel=new DataModel();
  constructor(private _fb:FormBuilder,private _api:JsonApiService) { }

  ngOnInit(): void {
   
  this.getdata();
this.dashBoardForm=this._fb.group({
  FullName:[''],
  EmailId:[''],
  MobileNumber:['']
})
}
postData(){
  this.modelObj.FullName=this.dashBoardForm.value.FullName;
  this.modelObj.EmailId=this.dashBoardForm.value.EmailId;
  this.modelObj.MobileNumber=this.dashBoardForm.value.MobileNumber;
  this.modelObj.PassWord=this.dashBoardForm.value.PassWord;

  this._api.postData(this.modelObj).subscribe(res=>{console.log(res)});
 
  this.dashBoardForm.reset();
}
getdata(){
this._api.getData().subscribe(res=>{this.data=res});
}
deleteData(item:any){
  
}

}
