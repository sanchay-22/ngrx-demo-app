import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CHANNEL_NAME_ACTION_CONST, CUSTOM_DECREMENT_ACTION_CONST, CUSTOM_INCREMENT_ACTION_CONST } from '../state/counter.actions';
import { Observable } from 'rxjs';
import { CounterStateModel } from '../state/counter.state';
import { GET_CHANNEL_NAME_SELECTOR_COST } from '../state/counter.selectors';

@Component({
  selector: 'app-custom-input-counter',
  templateUrl: './custom-input-counter.component.html',
  styleUrls: ['./custom-input-counter.component.css']
})
export class CustomInputCounterComponent{
  inputValue!: number;
  channel$: Observable<string> = this.store.select(GET_CHANNEL_NAME_SELECTOR_COST);

  constructor(private store: Store<{counter: CounterStateModel}>) {}

  changeCounter(option: string): void {
    const operation = (option) ? CUSTOM_INCREMENT_ACTION_CONST : CUSTOM_DECREMENT_ACTION_CONST;
    this.store.dispatch(operation({value: +this.inputValue}))
  }

  changeChannel(): void {
    this.store.dispatch(CHANNEL_NAME_ACTION_CONST({channelName: 'BBC News'}));
  }
}
 