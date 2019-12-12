import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { RaiseRequestComponent } from './raise-request/raise-request.component';
import { ViewAllResourceComponent } from './view-all-resource/view-all-resource.component';
import { TesterAndDeveloperComponent } from './tester-and-developer/tester-and-developer.component';


import { RegisterComponent } from './register/register.component';
import { LoginService } from './auth/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
  
    AddResourceComponent,
    AdminHomeComponent,
    ProjectManagerComponent,
    RaiseRequestComponent,
    ViewAllResourceComponent,
    TesterAndDeveloperComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
