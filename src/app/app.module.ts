import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageNotFoundCompnentComponent } from './page-not-found-compnent/page-not-found-compnent.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
         AppComponent,
         PageNotFoundCompnentComponent,
         LoginComponent,
         HomeComponent,
         HeaderComponent,
         ProductListComponent,
         ProductDetailsComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }