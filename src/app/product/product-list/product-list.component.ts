import { transition ,trigger,animate,state,style} from '@angular/animations';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

  animations: [
    trigger('fade',[
      transition('void => *',[
        style({ backgroundColor:'Yellow',opacity:0}),
        animate(2000)
      ])
    ])
  ]

  // attach the fade in animation to the host (root) element of this component
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  msg:string="";
  searchProduct:string="";
  icons:boolean=false;

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
  icon(){
    this.icons=!this.icons;
  }
  
}