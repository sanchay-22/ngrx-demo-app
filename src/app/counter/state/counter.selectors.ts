import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterStateModel } from './counter.state';
import { StateEnum } from 'src/app/shared/shared.enum';

const GET_COUNTER_STATE_CONST = createFeatureSelector<CounterStateModel>(StateEnum.COUNTER_STATE);

export const GET_COUNTER_SELECTOR_CONST = createSelector(GET_COUNTER_STATE_CONST, (state) =>  state.counter);
export const GET_CHANNEL_NAME_SELECTOR_COST = createSelector(GET_COUNTER_STATE_CONST, (state) => state.channelName);