import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm!:FormGroup
userapi=environment.userapi;
submitted = false;
get f() { return this.loginForm.controls; }
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
    private userService: UserService) { }
  ngOnInit(): void {
    this.userService.validateAuth(false);
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
    this.http.get<any>(this.userapi)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password=== this.loginForm.value.password
      });
      if(user){
        alert("login successfully !!");
        this.loginForm.reset();
        this.router.navigate(['Home'])
        this.userService.validateAuth(true);
      }else{
        alert("user not found !!");       
        this.userService.validateAuth(false);
      }
    })
  }
}
