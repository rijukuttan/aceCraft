import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm!:FormGroup
submitted = false;
get f() { return this.loginForm.controls; }
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    }
    this.http.get<any>("http://localhost:3000/signupUser")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password=== this.loginForm.value.password
      });
      if(user){
        alert("login successfully !!");
        this.loginForm.reset();
        this.router.navigate(['Home'])
      }else{
        alert("user not found !!");
      }
    })
  }

}
