
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private http:HttpClient) { }

url:string = "http://localhost:3000/Products";

getProducts(){
  return this.http.get<Products[]>(this.url);
}

getProductsById(id: number){
  return this.http.get<Products[]>(this.url+'?id='+id);
}

}

