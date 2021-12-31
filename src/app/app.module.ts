import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './edit/edit.component';
import { GuardGuard } from './guard.guard';
import { DashTologinGuard } from './dash-tologin.guard';
//import { CommonInterceptor } from './common.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GuardGuard,DashTologinGuard,
   // {provide:HTTP_INTERCEPTORS,useClass:CommonInterceptor,multi:true}
//{provide:HTTP_INTERCEPTORS,useClass:TestInterceptor,multi:true},
// {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
// {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
