import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Products } from 'src/app/models/products';
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
    private router:Router,
    private actRoute:ActivatedRoute) { }


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







