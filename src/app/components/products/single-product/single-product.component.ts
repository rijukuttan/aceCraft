import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() products:any;

  constructor(private productService:ProductsService,private http:HttpClient,
              private router:Router) { }

  ngOnInit() {
  }
  productId!:number;

  viewProduct(id:number){
    this.productId = id;
    this.router.navigate(['viewProduct/'+id])
  //return  this.http.get(`http://localhost:3000/viewproduct/${id}`)
  }

}
