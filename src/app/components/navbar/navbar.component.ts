import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:UserService) { }
auth:boolean=false;
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('next subscribed value: ' + data);
        this.auth = data;
      }
    );
  }

}
