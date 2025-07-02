import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone : true

})

export class Products implements OnInit {

  products : any;


  constructor(private productService: ProductService ){
  }

      ngOnInit(): void {
this.getAllProducts();
  //  this.products = this.productService.getAllProducts();
  }


  getAllProducts(){
   this.products = this.productService.getAllProducts();
  }

  handleDelete(product : any): void {
    let v = confirm('are u sur that u want to delete ')
    if(v==true){
        this.productService.deleteProducts(product);
        this.getAllProducts();
    }
  }
}
