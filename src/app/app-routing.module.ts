import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { AddResourceComponent } from './add-resource/add-resource.component';


const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminHomeComponent},
  {path:'manager',component:ProjectManagerComponent},
  {path:'addResource',component:AddResourceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

