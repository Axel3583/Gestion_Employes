import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesDashComponent } from './employes-dash/employes-dash.component';
import { EmployesHomeComponent } from './employes.home/employes.home.component';
import { ListingComponentComponent } from './listing-component/listing-component.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: ' ', redirectTo:'/login', pathMatch:'full'},
  // { path: '**', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent},
  { path: 'singup', component: SignupComponent},
  { path: "dash", component: EmployesDashComponent},
  { path: 'listing-component', component: ListingComponentComponent},
  { path: 'employes.home', component: EmployesHomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
