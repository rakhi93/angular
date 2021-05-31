import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
   animations: [
      trigger('myanimation',[
         state('larger',style({
            transform : 'translateX(480px)'
         })),
         state('smaller',style({
            transform : 'translateX(0px)'
         })),
         transition('larger <=> smaller',animate('300ms ease-in'))
      ])
   ]
})
export class HomeComponent implements OnInit {
  state: string = "smaller";
   animate() {
      this.state= this.state == 'larger' ? 'smaller' : 'larger';
   }
  image="https://cdn.rawgit.com/DeborahK/Angular-ReactiveForms/187d0a8060a67286811c1a2d61b3ca4fae45e6a4/APM/src/favicon.ico"
  constructor() { }

  ngOnInit(): void {
  }

}
