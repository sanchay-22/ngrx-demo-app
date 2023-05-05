import { Action, createReducer, on } from '@ngrx/store';
import { INITAL_COUNTER_STATE } from './counter.state';
import  * as actions from'./counter.actions' 

const COUNTER_REDUCER_CONST = createReducer(INITAL_COUNTER_STATE, 
    on(actions.INCREMENT_ACTION_CONST, (state) => ({...state, counter: state.counter + 1})),
    on(actions.DECREMENT_ACTION_CONST, (state) => ({...state, counter: state.counter - 1})),
    on(actions.RESET_ACTION_CONST, (state) => ({...state, counter: 0})),

    on(actions.CUSTOM_INCREMENT_ACTION_CONST, (state, action) => ({ ...state, counter: state.counter + action.value})),
    on(actions.CUSTOM_DECREMENT_ACTION_CONST, (state, action) => ({ ...state, counter: state.counter - action.value}))
   
);

export function counterReducer(state: any, action: Action): any {
    return COUNTER_REDUCER_CONST(state, action);
} 