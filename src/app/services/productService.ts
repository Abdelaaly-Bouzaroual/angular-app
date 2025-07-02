import { booleanAttribute, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    products : Array<any> = [
    {id:1,  name : "computer", price:2300, selected:true},
    {id:2, name : "phone", price:320, selected:false},
    {id:3, name : "printer", price:900, selected:false},
    {id:4, name : "laptop", price:4321, selected:true},
    {id:5, name : "smart tv ", price:6321, selected:false}
  ]

  constructor() { }

  getAllProducts(){
    return this.products
  }

  deleteProducts(product : any){
    console.log("deleteMethode **************************")
    this.products = this.products.filter((p : any):boolean => p.id != product.id)
  }
}
