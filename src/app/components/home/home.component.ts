import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
backgroundImageSchool="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/home3.jpg"
backgroundImageCollege="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Home-1.jpg"
backgroundImageEntreprises="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/home4.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
