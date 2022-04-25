import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  STYLING(){ 
    window.open("/StylingAccessories","_self")
  }
  CLASSIC(){ 
  
    window.open("/Classiclooks","_self")
  }
  ACING(){ 
    window.open("/ACING","_self")
  }
  WORKWEAR(){ 
    window.open("/Selecting","_self")
  }
  WOMEN(){ 
    window.open("/BodytypesWomens","_self")
  }
  LOOKS(){ 
    window.open("/ClassiclooksHim","_self")
  }
  TIPS(){ 
    window.open("/Tipsforgreateoutfit","_self")
  }
  DRESSING(){ 
    window.open("/Dressingtosucceed","_self")
  }
  EDIT(){ 
    window.open("/Workwearforallseasons","_self")
  }
  DIFFERENCE(){ 
    window.open("/Theacecraftdifference","_self")
  }
  CORPORATE(){ 
    window.open("/Corporatetocupcakes","_self")
  }
  COLLEGE(){ 
    window.open("/Collegelook","_self")
  }
  DRESS(){ 
    window.open("/rightway","_self")
  }

}
