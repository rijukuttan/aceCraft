import { Component, OnInit,Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count =1;  
 // @Input() count?:number;
  
  receivecount($event: number) {  
  this.count = $event;  
  }  

  constructor() { }

  ngOnInit(): void {
  }

}
