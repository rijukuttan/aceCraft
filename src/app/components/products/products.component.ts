import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
//import { Products } from '../models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  //productsList:Products[] =[];
  productsList:any[] =[];
  optionSelected:any;

  sortParam:any;
  sortDirection:any;

  onOptionsSelected(event: any){
    console.log(event.target.value); //option value will be sent as event

    this.optionSelected = event.target.value;

    if(this.optionSelected === 'lth'){
      this.sortParam = 'price',
      this.sortDirection ='asc'
    }
    else if(this.optionSelected === 'htl'){
      this.sortParam = 'price',
      this.sortDirection ='desc'
    }
    else if(this.optionSelected === 'nasc'){
      this.sortParam = 'title',
      this.sortDirection ='asc'
    }
    else if(this.optionSelected === 'ndesc'){
      this.sortParam = 'title',
      this.sortDirection ='desc'
    }

   }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response) =>
      {
        this.productsList = response
      },

      (error) =>
      {
        console.log("Error Occured: "+error );

      }

    )


    }



  }


