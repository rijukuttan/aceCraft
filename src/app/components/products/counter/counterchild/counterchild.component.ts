import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {
  //counterValue= 1;
  @Input() counterValue:number=1;
  countLessThenZero=true;
  @Output() countEmitter = new EventEmitter ();  
  @Output() quantityEmitter = new EventEmitter (); 
  PostData() {  
      this.countEmitter.emit(this.counterValue); 
      this.quantityEmitter.emit(this.counterValue);  
  }  
 
 // PostQuantity() {  
 //     this.quantityEmitter.emit(this.counterValue);  
 // }  
 
  increment() {
    this.counterValue++;
    this.countLessThenZero=true;
    this.PostData();
  }
  decrement() {
    if(this.counterValue==1){
      this.countLessThenZero=false;
    }else{
      this.countLessThenZero=true;
      this.counterValue--;
    this.PostData();
    }
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
