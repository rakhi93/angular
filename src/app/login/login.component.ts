import { LoginService } from './../../login.service';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ FormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private _loginservice:LoginService) { }
  submit()
  {
    this._loginservice.loginUser();
    this.router.navigateByUrl('/home')
  }
  ngOnInit(): void {

  }

}
