import { SearchPipe } from './search.pipe';
import { ProductRoutingModule } from './product-routing.module';
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    FormsModule
  ],
})
export class ProductModule { }