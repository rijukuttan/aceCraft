import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
url:string=""
  constructor(private http:HttpClient) {
    this.url = "http://localhost:3000/cartItem/";
   }

 // cartItem:CartItem[]=[]
addToCart(product:CartItem){
 // this.cartItem.push(product)
 
  this.http.post<CartItem>('http://localhost:3000/cartItem', product).subscribe(data => {
    alert("item added to cart Successfull");
    console.log(product)
})
}
getCartItems(){
  return this.http.get<CartItem[]>('http://localhost:3000/cartItem');
}

  removeItemFromCart(item:any){
 
 return this.http.delete(this.url + item.id)
  }
  emptyCart(){

  }
  
}
