import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { GuardGuard } from './guard.guard';
import { DashTologinGuard } from './dash-tologin.guard';
const routes: Routes = [
   {path:"",redirectTo:"Login",pathMatch:'full'},
{path:"Login",component:LoginComponent,canActivate:[DashTologinGuard]},
{path:'Register',component:RegisterComponent},
{path:'DashBoard',canActivate:[GuardGuard],component:DashBoardComponent},
{path:'Edit/:id',canActivate:[GuardGuard], component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
