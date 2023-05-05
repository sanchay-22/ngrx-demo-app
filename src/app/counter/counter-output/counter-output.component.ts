import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterStateModel } from '../state/counter.state';
import { COUNTER_SELECTOR_CONST } from '../state/counter.selectors';
import { Observable } from 'rxjs';

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
  counter$: Observable<number> = this.store.select(COUNTER_SELECTOR_CONST); //this dolar sign indicates observable
  constructor(private store:Store<{ counter: CounterStateModel}>) {}

}
