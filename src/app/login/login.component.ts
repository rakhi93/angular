import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  submit()
  {
    this.router.navigateByUrl('/home')
  }
  ngOnInit(): void {
  }

}
