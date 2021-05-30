import { SearchPipe } from './product/search.pipe';
import { AuthGuard } from './../auth.guard';
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import{ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchPipe,
    HomeComponent,
    HeaderComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  HttpClientModule,
  ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }