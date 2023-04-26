import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddrestrComponent } from './addrestr/addrestr.component';
import { ListrestroComponent } from './listrestro/listrestro.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"add",
    component:AddrestrComponent
  },
  {
    path:"list",
    component:ListrestroComponent
  },
  {
    path:"update",
    component:UpdateRestroComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
