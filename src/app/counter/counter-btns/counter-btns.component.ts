import { Component, EventEmitter, Output} from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT_ACTION_CONST, DECREMENT_ACTION_CONST, RESET_ACTION_CONST } from '../state/counter.actions';
import { CounterModel } from '../state/counter.state';

@Component({
  selector: 'app-counter-btns',
  templateUrl: './counter-btns.component.html',
  styleUrls: ['./counter-btns.component.css']
})
export class CounterBtnsComponent {
  //This is without using the ngrx store
  /*
    @Output() changeCounter = new EventEmitter<string>();

  onClick(clckedBtnValue?: string): void {
    clckedBtnValue ? this.changeCounter.emit(clckedBtnValue) : this.changeCounter.emit();
  }
  */

  //This is using the ngrx
  constructor(private store: Store<{ counter: CounterModel }>) {}
  onClick(value: string) : void {
    const dispatchAction = (value === 'inc') ? INCREMENT_ACTION_CONST() : (value === 'dec') ? DECREMENT_ACTION_CONST() : RESET_ACTION_CONST();
    this.store.dispatch(dispatchAction);  }
}
