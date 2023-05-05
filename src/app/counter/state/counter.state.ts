export interface CounterStateModel {
    counter: number;
    channelName: string;

}

export const INITAL_COUNTER_STATE: CounterStateModel = {
    counter: 3,
    channelName: 'default Name'
}