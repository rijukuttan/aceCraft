import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Cart } from 'src/app/models/cart';
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
    private actRoute:ActivatedRoute,private cartsvc:CartService,private route:ActivatedRoute) { 
      
    }
    cart:CartItem={
      id:0,
      title: '',
      productCode: '',
      brand: '',
      soldBy: '',
      totalPrice:1,
      price: 0,
      originalPrice: 0,
      offerPercent: 0,
      quantity:0,
      size: 0,
      description: [],
      imgSrc: ''
    }
sizes :number=0
quantity:number=0

    addToCart(product:any){
      this.cart.title=product.title;
      this.cart.productCode=product.productCode;
      this.cart.brand=product.brand;
      this.cart.soldBy=product.soldBy;
      this.cart.price=product.price;
      this.cart.originalPrice=product.originalPrice;
      this.cart.offerPercent=product.offerPercent;
      this.cart.size=this.sizes;
      this.cart.totalPrice=product.totalPrice;
      this.cart.quantity=this.quantity;
      this.cart.description=product.description;
      this.cart.imgSrc=product.imgSrc;
      this.cart.id=product.id;
      this.cartsvc.addToCart(this.cart);
      console.log(product.id);
    }
   


     productData:Products={
       title: '',
       productCode: '',
       brand: '',
       soldBy: '',
       price: 0,
       originalPrice: 0,
       offerPercent: 0,
       gender: '',
       size: [],
       description: [],
       imgSrc: ''
     }

    productDatas:any;
    //products:Products[]=[];
    products:any;
    
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.productId=params['id']

  
    })
    this.productService.getProductsById(this.productId).subscribe(products=>{
      this.productDatas=products as Products
    })
    

  /*  this.productId = this.actRoute.snapshot.params['id'];

 

     this.productService.getProductsById(this.productId).subscribe(
       (response) =>
       {
         console.log(response)
         this.productData = response;
         console.log(this.productData);
       }
     )*/
  }


  }







