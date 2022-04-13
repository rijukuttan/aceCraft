import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CartItem } from 'src/app/models/cartItem';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId!:number;
  //productData:any;
  constructor(private productService:ProductsService,
    private router:Router,private http:HttpClient,
    private actRoute:ActivatedRoute,private cartsvc:CartService) { }

    addToCart(product:any){
      this.cartsvc.addToCart(product);
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

    productData:any;
  ngOnInit() {
    this.productId = this.actRoute.snapshot.params['id'];

    // this.productService.getProductsById(this.productId)
    // .pipe(
    //   map((response) =>
    //   {

    //      = response.title;
    //   })
    // )

     this.productService.getProductsById(this.productId).subscribe(
       (response) =>
       {
         console.log(response)
         this.productData = response;
         console.log(this.productData);
       }
     )
  }


  }







