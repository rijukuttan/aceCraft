import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private cartSvc:CartService,private http: HttpClient) { }
  //cartList:any[] =[];
  carts:CartItem={
    title: '',
    productCode: '',
    brand: '',
    soldBy: '',
    price: 0,
    originalPrice: 0,
    offerPercent: 0,
   // gender: '',
    size: [],
    description: [],
    imgSrc: ''
  }
  cart:CartItem[]=[];
  delete(deleteItem:CartItem){
   // this.service.deleteUser(id).subscribe(
   //   ()=> console.log(`Employee with Id = ${this.employee.id}deleted`),
   //   (err) => console.log(err)
   // );
   this.cartSvc.removeItemFromCart(deleteItem).subscribe(
     ()=>console.log(deleteItem.title)
    // this.ngOnInit();
     
   );
   this.ngOnInit();
  }
  ngOnInit(): void {

    
   // this.http.get<CartItem>('http://localhost:3000/cartItem').subscribe(res => {
   //   console.log('res',res);
   //   this.cart=res;
  // })
   this.cartSvc.getCartItems().subscribe (     
  (response) =>
   {
    
    this.cart=response;
     console.log(this.cart);
   }
 )
  }


    // productData:Products={
    //   title: '',
    //   productCode: '',
    //   brand: '',
    //   soldBy: '',
    //   price: 0,
    //   originalPrice: 0,
    //   offerPercent: 0,
    //   gender: '',
    //   size: [],
    //   description: [],
    //   imgSrc: ''
    // }

}
