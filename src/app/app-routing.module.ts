import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestrantsComponent } from './components/add-restrants/add-restrants.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import {DisplayRestrantComponent} from './components/display-restrant/display-restrant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import{SalesComponent} from './components/sales/sales.component'
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [

  {path:'',redirectTo:'/admin',pathMatch:'full'},
  {path:'AddRestrant',component:AddRestrantsComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'ShowData',component:ShowDataComponent},
  {path:'DisplayRestrant/:id',component:DisplayRestrantComponent},
  {path:'Dashboard',component:DashboardComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'sales',component:SalesComponent},
  {path:'admin',component:AdminComponent ,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'login',component:AdminLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
