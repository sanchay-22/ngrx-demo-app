import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterBtnsComponent } from './counter-btns/counter-btns.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { CustomInputCounterComponent } from './custom-input-counter/custom-input-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

@NgModule({
  declarations: [
    CounterComponent,
    CounterBtnsComponent,
    CounterOutputComponent,
    CustomInputCounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('counter', counterReducer)
  ]
})
export class CounterModule { }
