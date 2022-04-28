import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 // cartCount:number=0;
  //cartCount: number=0;

  constructor(private authService:UserService,private cartSvc:CartService,private http: HttpClient,) {
    
   }
   getCartCount(){
    this.cartSvc.getCartItems().subscribe (     
        (response) =>
         {        
          this.cartCount=response.length;
          console.log(this.cartCount);
         }
       )
     return this.cartCount;
   }
  // c= this.cartSvc.countSubject.subscribe((data) => {
  //   this.cartCount=data;
  //   console.log("Subscriber got data >>>>> "+ this.cartCount);
  // });
auth:boolean=false;
cartCount: number=0;
  ngOnInit(): void {  
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    this.getCartCount();
    // this.cartSvc.getCartItems().subscribe (     
    //   (response) =>
    //    {        
    //     this.cartCount=response.length;
    //     console.log(this.cartCount);
    //    }
    //  ) 
    // this.cartSvc.countSubject.subscribe (     
    //   (response) =>
    //    {        
    //     this.cartCount=response;
    //     console.log(this.cartCount);
    //    }
    //  ) 
  }
}
