import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  msg:string="";
  searchProduct:string="";
  counter(i: number) {
    return new Array(i);
}
  constructor(private _productservice:ProductService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this._productservice.get().subscribe(data=>{
      this.products=data;
    });
  }
}