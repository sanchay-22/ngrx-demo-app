import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CUSTOM_DECREMENT_ACTION_CONST, CUSTOM_INCREMENT_ACTION_CONST } from '../state/counter.actions';

@Component({
  selector: 'app-custom-input-counter',
  templateUrl: './custom-input-counter.component.html',
  styleUrls: ['./custom-input-counter.component.css']
})
export class CustomInputCounterComponent {
  inputValue!: number;

  constructor(private store: Store<{counter: Store}>) {}

  onClick(option: string): void {
    const operation = (option) ? CUSTOM_INCREMENT_ACTION_CONST : CUSTOM_DECREMENT_ACTION_CONST;
    this.store.dispatch(operation({value: +this.inputValue}))
  }
}
