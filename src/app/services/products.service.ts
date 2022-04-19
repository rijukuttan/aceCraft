
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, Subscriber } from 'rxjs';
import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private http:HttpClient) { }

url:string = "http://localhost:3000/Products";
url2:string = "http://localhost:3000/";

getProducts(){

  return this.http.get<Products[]>(this.url);
}

getProductsById(id: number){
  return this.http.get<Products>(this.url+'?id='+id);
}
getProductsByIds(id: any){
  return this.http.get<Products[]>(this.url+'?id='+id);
}

}

