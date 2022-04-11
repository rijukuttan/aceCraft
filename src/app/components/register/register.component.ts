import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //public registerForm!:FormGroup;
  registerForm= new FormGroup({
    Studentfirstname:new FormControl(''),
    studentlastname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmpassword:new FormControl(''),
    parentname:new FormControl(''),
    admissionnumber:new FormControl('') 
  })

  submitted = false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Studentfirstname: ['', Validators.required],
      studentlastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
      parentname:['', Validators.required],
      admissionnumber:['', Validators.required]
        });
  }
  get f() { return this.registerForm.controls; }
  submitHandler(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return ;
  }
   
    this.http.post<any>("http://localhost:3000/signupUser",this.registerForm.value)
    .subscribe(res=>{
      alert("signUp Successfull");
      this.registerForm.reset();
      this.router.navigate(['login']);
    })
    
  }

}
