import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesDashComponent } from './employes-dash/employes-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployesHomeComponent } from './employes.home/employes.home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './singup/singup.component';
import { ListingComponentComponent } from './listing-component/listing-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesDashComponent,
    EmployesHomeComponent,
    LoginComponent,
    SignupComponent,
    ListingComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
