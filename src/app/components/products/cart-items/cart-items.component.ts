import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  quanties:number=0;

  constructor(private cartSvc:CartService,private http: HttpClient,
    private cartsvc:CartService,private productsvc:ProductsService) { }
  //cartList:any[] =[];
  carts:CartItem={
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
   // gender: '',
    size: 0,
    description: [],
    imgSrc: ''
  }
 // quanties:number=0;
cartData:any=[];
total:number=0;
quantity =1;  
//@Input() count?:number;
 
 receivequantity($event: number) {  
 this.quantity = $event;  
 } 
totalPrices(data:any) {
  debugger  
      this.total=0;
     this.cartData=data    
      console.log(this.cartData);  
     for(let j=0;j<data.length;j++){   
     this.total+= (this.cartData[j].price +this.cartData[j].quantity )
           console.log(this.cartData[j].quantity)  
      }  
      return this.total;
}
totalPrice(data:any) {
  debugger  
  const intialValue = 0; 
  
     this.cartData=data    
     const a= this.cartData.reduce((sum:any, item:any) => sum +(item.price * item.quantity),intialValue);
     return a;
}
     



  cart:CartItem[]=[];
  updateToCart(cart:CartItem){
    console.log(this.quantity)

    this.carts.id=cart.id;
   // this.carts.title=cart.title;
   // this.carts.productCode=cart.productCode;
   // this.carts.brand=cart.brand;
   // this.carts.soldBy=cart.soldBy;
   this.carts.totalPrice=(cart.price * this.quantity);
   // this.carts.price=(cart.price * this.quantity);
  //  this.carts.originalPrice=cart.originalPrice;
  //  this.carts.offerPercent=cart.offerPercent;
  //  this.carts.size=cart.size;
    this.carts.quantity=this.quantity;
   // this.carts.description=cart.description;
  //  this.carts.imgSrc=cart.imgSrc;
    this.cartsvc.updateCart(this.carts).subscribe(
      ()=>console.log("update successfully")
 
    
      
    )
 
    this.ngOnInit();
  }
  delete(deleteItem:CartItem){
   // this.service.deleteUser(id).subscribe(
   //   ()=> console.log(`Employee with Id = ${this.employee.id}deleted`),
   //   (err) => console.log(err)
   // );
   this.cartSvc.removeItemFromCart(deleteItem).subscribe(
     ()=>console.log(deleteItem.title)
    // this.ngOnInit();
     
   );
   this.ngOnInit();
  }
  products:any[] =[];
  responsiveOptions:any;
  ngOnInit(): void {

    
   // this.http.get<CartItem>('http://localhost:3000/cartItem').subscribe(res => {
   //   console.log('res',res);
   //   this.cart=res;
  // })
   this.cartSvc.getCartItems().subscribe (     
  (response) =>
   {
    
    this.cart=response;
     console.log(this.cart);
   }
 )
 //carosel
 this.productsvc.getProducts().subscribe(
  (response) =>
  {
    this.products = response
  },

  (error) =>
  {
    console.log("Error Occured: "+error );

  }

)
 this.responsiveOptions = [
  {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
  },
  {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
  },
  {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
  }
];
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

}
