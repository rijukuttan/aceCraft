
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, Subscriber } from 'rxjs';
import { Products } from '../models/products';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  hosturl = environment.herokuapi;
  producturl = environment.productapi;
  constructor(private http: HttpClient) { }

  // url:string = "https://evening-reaches-02350.herokuapp.com/Products";
  // url2:string = "https://evening-reaches-02350.herokuapp.com/";

  getProducts() {

    return this.http.get<Products[]>(this.producturl);
  }

  getProductsById(id: number) {
    return this.http.get<Products>(this.producturl + '?id=' + id);
  }
  getProductsByIds(id: any) {
    return this.http.get<Products[]>(this.producturl + '?id=' + id);
  }

}

