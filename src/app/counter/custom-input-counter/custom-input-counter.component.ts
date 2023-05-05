import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CHANNEL_NAME_ACTION_CONST, CUSTOM_DECREMENT_ACTION_CONST, CUSTOM_INCREMENT_ACTION_CONST } from '../state/counter.actions';
import { untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { CounterStateModel } from '../state/counter.state';

@Component({
  selector: 'app-custom-input-counter',
  templateUrl: './custom-input-counter.component.html',
  styleUrls: ['./custom-input-counter.component.css']
})
export class CustomInputCounterComponent implements OnInit{
  inputValue!: number;
  channelName!: string;

  constructor(private store: Store<{counter: CounterStateModel}>) {}

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.setData();
  }

  setData(): void {
    this.store.select('counter').subscribe((data) => this.channelName = data.channelName);
  }

  changeCounter(option: string): void {
    const operation = (option) ? CUSTOM_INCREMENT_ACTION_CONST : CUSTOM_DECREMENT_ACTION_CONST;
    this.store.dispatch(operation({value: +this.inputValue}))
  }

  changeChannel(): void {
    this.store.dispatch(CHANNEL_NAME_ACTION_CONST({channelName: 'BBC News'}));
  }
}
 