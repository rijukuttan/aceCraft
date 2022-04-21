import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, Observable, Subject } from 'rxjs';
import { CartItem } from '../models/cartItem';
import{environment} from './../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CartService {
url:string=""
carturl=environment.cartapi;
  constructor(private http:HttpClient) {
    this.url = this.carturl+"/";
   
   }

 // cartItem:CartItem[]=[]
addToCart(product:CartItem){
 // this.cartItem.push(product)
 
  this.http.post<CartItem>(this.carturl, product).subscribe(data => {
    alert("item added to cart Successfull");
    console.log(product)
})
}
getCartItems(){
  return this.http.get<CartItem[]>(this.carturl);
}

  removeItemFromCart(item:any){
 
 return this.http.delete(this.url + item.id)
  }
  updateCart(item:any) {
    let id=item.id;
    console.log(item.quantity)
    this.http.patch<CartItem>(this.url + item.id, {
      
      quantity: 1,
      totalPrice:1
     //
      
     });
    //const cartUrl = `${this.url}/${id}`;
    //return this.http.delete(this.url + item.id)
    return this.http.patch<CartItem>(this.url + item.id, {
      
     quantity: item.quantity,
     totalPrice:item.totalPrice
    //
     
    });
  }
  emptyCart(){

  }
 
  
}
