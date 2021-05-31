import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './../auth.guard';
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
  { path: "register",component:RegisterComponent},

  { path: 'products',loadChildren:()=>import('./product/product.module').then(m =>m.ProductModule) },

  { path: '**',component: PageNotFoundCompnentComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
