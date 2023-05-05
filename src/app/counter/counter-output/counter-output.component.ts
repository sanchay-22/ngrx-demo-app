import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  //This is without using the ngrx 
  /*
   @Input() set SetCounter(counterValue: number) {
    this.counter = counterValue;
  }
  */

  //with ngrx
  counter$ = this.store.select('counter'); //this dolar sign indicates observable
  constructor(private store:Store<{ counter: CounterModel}>) {}

}
