import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  count=0;
  
  constructor(private Formbuilder:FormBuilder) { 
    this.submitForm=Formbuilder.group({
      "Name":['',Validators.required],
      "Email":['',Validators.required],
      "Message":['',Validators.required]
    })
  }
  get f(){ return this.submitForm.controls}
  submitForm=new FormGroup({
    Name:new FormControl,
    Email:new FormControl,
    Message:new FormControl
  })

  ngOnInit(): void {
  }

  submitHandler(){
    console.log(this.submitForm.value)
    alert("Data uploded successfully...")
   if(this.submitForm.value!=0){
     this.count++;
   } 
    
  }
}
