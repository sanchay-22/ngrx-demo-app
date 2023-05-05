import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
counter: number = 0;

updateCounter(value: string): void {
  this.counter = (value === 'inc') ? this.counter + 1 : (value === 'dec') ? this.counter - 1 : 0;
}
}
