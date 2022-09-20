import { Component, OnInit } from '@angular/core';
import {Subject,BehaviorSubject,Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mySubject = new Subject <string>();
  constructor() { }

  ngOnInit(): void {
   this.mySubject.subscribe((value) =>
   console.log ('First Observer:' +value)
   );
   this.mySubject.subscribe((value) =>
   console.log ('Seecond Observer:' +value)
   );


   this.mySubject.next('Hello');
   
   this.mySubject.next('Angular');
  }

}
