import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, Observable, Subject } from 'rxjs';
import { CartItem } from '../models/cartItem';
import { environment } from './../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  url: string = ""
  carturl = environment.cartapi;
  constructor(private http: HttpClient) {
    this.url = this.carturl + "/";

  }
  //  public countSubject = new Subject<number>();
  // validateAuth(data:number) {
  //   //passing the data as the next observable
  //   this.countSubject.next(data);
  // }

  // cartItem:CartItem[]=[]
  addToCart(product: CartItem) {
    // this.cartItem.push(product)

    this.http.post<CartItem>(this.carturl, product).subscribe(data => {
      alert("item added to cart Successfull");
      console.log(product)
    })
  }
  getCartItems() {
    return this.http.get<CartItem[]>(this.carturl);
  }

  removeItemFromCart(item: any) {

    return this.http.delete(this.url + item.id)
  }
  updateCart(item: any) {
    let id = item.id;
    console.log(item.quantity)
    this.http.patch<CartItem>(this.url + item.id, {

      quantity: 1,
      totalPrice: 1
      //

    });
    //const cartUrl = `${this.url}/${id}`;
    //return this.http.delete(this.url + item.id)
    return this.http.patch<CartItem>(this.url + item.id, {

      quantity: item.quantity,
      totalPrice: item.totalPrice
      //

    });
  }
  emptyCart() {

  }
  public countSubject = new Subject<number>();

  // var c= this.countSubject.subscribe(
  //   data => 
  //   {
  //     console.log('next subscribed value: ' + data);
  //     this.isAuthenticated = data;
  //   })

  // We subscribe to the subject
  // countSubject.subscribe((data) => {
  //   console.log("Subscriber got data >>>>> "+ data);
  // });

  // // We use the subject to emit data
  // countSubject.next("Eureka");

  // getCount(){
  //   return this.http.get<CartItem[]>(this.carturl).subscribe(res=>{


  //     // We use the subject to emit data
  //     this.countSubject.next(res.length);
  //     console.log(res.length+"inside sub")
  //    //const user=res.length

  //   })
  // }

  getCount() {
    return this.getCartItems().subscribe(res => {


      // We use the subject to emit data
      this.countSubject.next(res.length);
      console.log(this.countSubject + "inside sub")
      //const user=res.length

    })
  }

}
