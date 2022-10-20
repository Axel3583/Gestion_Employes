import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginForm!: FormGroup

  constructor( private formBuilder: FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(){
      this.loginForm = this.formBuilder.group({
        email: [''],
        password: ['']
      })
    }

    login(){
    this.http.get<any>("http://localhost:3000/comments")
    .subscribe(res => {
      const user = res.find((a: any) =>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      } )

      if (user){
        alert("login success")
        this.loginForm.reset();
        this.router.navigate(['/dash'])
      }else {
        alert("user not found")
      }
        
      }, err => {
        alert ("Something went wrong")
      })
    
}

}
