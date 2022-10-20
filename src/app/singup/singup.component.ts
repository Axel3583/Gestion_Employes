import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group ({
      
      fullname: [''],
      email: [''],
      password: [''],
      mobile: ['']

    })
  }

  signUp(){
        this.http.post<any>(" http://localhost:3000/comments " , this.signupForm.value)
        .subscribe(res=> {
          alert ("SignUp Successful");
          this.signupForm.reset();
          this.router.navigate(['login'])
        }, err => {
          alert ("Something went wrong")
        })
  }

}