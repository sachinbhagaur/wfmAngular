import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  exports:[LoginComponent],
  providers:[LoginService]
})
export class AuthModule { }
