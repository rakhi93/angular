import { AuthGuard } from './../auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundCompnentComponent } from './page-not-found-compnent/page-not-found-compnent.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes =
 [
  { path:"",redirectTo:'login',pathMatch:'full'},
  { path:"login",component:LoginComponent},
  { path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  { path: "product-list",component:ProductListComponent,canActivate:[AuthGuard]},
  { path: "product-details/:id",component:ProductDetailsComponent},
  { path: '**',component: PageNotFoundCompnentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
