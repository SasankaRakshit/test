import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }
  loginUser=localStorage.getItem('token');
  ngOnInit(): void {
  }
  LogOut(){
    this._router.navigate(['Login'])
    localStorage.removeItem("token");
  }

}
