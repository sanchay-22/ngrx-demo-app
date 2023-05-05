import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterStateModel } from './counter.state';

const GET_COUNTER_STATE_CONST = createFeatureSelector<CounterStateModel>('counter');

export const COUNTER_SELECTOR_CONST = createSelector(GET_COUNTER_STATE_CONST, (state) =>  state.counter);
export const CHANNEL_NAME_SELECTOR_COST = createSelector(GET_COUNTER_STATE_CONST, (state) => state.channelName);