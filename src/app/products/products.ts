import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [NgForOf],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone : true

})
export class Products {

  products = [
    {id:1,  name : "computer", price:2300, selected:true},
    {id:2, name : "phone", price:320, selected:false},
    {id:3, name : "printer", price:900, selected:false},
    {id:4, name : "laptop", price:4321, selected:true},
    {id:5, name : "smart tv ", price:6321, selected:false}
  ]
}
