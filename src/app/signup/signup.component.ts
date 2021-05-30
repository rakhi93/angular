import { Sign } from './../sign';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  model = new Sign('Admin','1234');  
  submitted = false;  
  onSubmit() { this.submitted = true; } 
  get diagnostic() { return JSON.stringify(this.model); }  

  constructor() { }

  ngOnInit(): void {
  }

}
 
 
   
