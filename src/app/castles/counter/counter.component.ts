import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count:number = 0;

  constructor() { }

  ngOnInit() {
  }

  decrement() {
  	this.count -= 1;
  }

  increment() {
  	this.count += 1;
  }
}
